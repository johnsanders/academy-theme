<?php

function get_modules_info($rows)
{
	$mods_info = [];
	foreach ($rows as $row) {
		foreach ($row->items as $item) {
			if ($item->modName === 'manual') continue;
			$item_module = get_coursemodule_from_id($item->modName, $item->modId);
			$mods_info[$item_module->id] = ["name" => $item_module->name];
		};
	}
	return $mods_info;
}
function get_scorm_attempts($userid)
{
	$query = "
		SELECT scorm.id, scorm.value, scorm.scormid, cm.id AS scorminstanceid
		FROM mdl_scorm_scoes_track as scorm
		INNER JOIN mdl_course_modules AS cm
		ON cm.instance = scorm.scormid AND cm.module = '19'
		WHERE scorm.userid = '$userid' AND scorm.element = 'cmi.core.score.raw';
	";
	global $DB;
	$attempts = array_values($DB->get_records_sql($query));
	$groups = [];
	foreach ($attempts as $attempt) {
		if (array_key_exists($attempt->scorminstanceid, $groups)) {
			array_push($groups[$attempt->scorminstanceid], $attempt);
		} else {
			$groups[$attempt->scorminstanceid] = [$attempt];
		}
	}
	$highest_attempts = array_map(function ($attempts) use ($groups) {
		$highest = $attempts[0];
		foreach ($groups as $group) {
			foreach ($group as $attempt)
				if ((int) $attempt->value > (int) $highest->value) $highest = $attempt;
			return $highest;
		}
	}, $groups);
	return $highest_attempts;
}
function get_user_rows($config, $user_course_ids)
{
	return array_filter($config->rows, function ($row) use ($user_course_ids) {
		if (count($row->requiredCourses) === 0) return true;
		else {
			foreach ($user_course_ids as $user_course_id) {
				if (in_array($user_course_id, $row->requiredCourses)) return true;
			}
		}
		return false;
	});
}
function get_current_items($user_rows)
{
	$now = time() * 1000;
	return array_map(function ($row) use ($now) {
		$current_row_items = array_filter($row->items, function ($item) use ($now) {
			if (!$item->dateStart && !$item->dateEnd) return true;
			if (!$item->dateStart) return $now < $item->dateEnd;
			if (!$item->dateEnd) return $now > $item->dateStart;
			return $now > $item->dateStart && $now < $item->dateEnd;
		});
		$row->items = array_values($current_row_items);
		return $row;
	}, $user_rows);
}
function get_grid_context_settings()
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$mods_info = get_modules_info($config->rows);
	return [
		'cnn_academy' => [
			'carouselItems' => $config->carousel,
			'instructors' => $config->instructors,
			'modsInfo' => $mods_info,
			'rows' => $config->rows,
			'tags' => $config->tags,
		],
		'js_src_path' => $CFG->wwwroot . '/theme/academy/js/dist',
	];
}
function get_course_modules($courses)
{
	global $DB;
	$mods_array = [];
	foreach ($courses as $course) {
		$modinfo = get_fast_modinfo($course);
		$cms = $modinfo->get_cms();
		foreach ($cms as $cm) {
			if (isset($mods_array[$cm->modname])) $mods_array[$cm->modname][$cm->instance] = $cm;
			else $mods_array[$cm->modname] = [$cm->instance => $cm];
		}
	}
	$queries = [];
	foreach ($mods_array as $modname => $mods) {
		$ids = array_map(function ($mod) {
			return $mod->instance;
		}, $mods);
		$where = implode(' OR ', $ids);
		$query = "SELECT id, intro FROM mdl_$modname WHERE $where;";
		$queries[$modname] = $query;
	}
	$mods_info = [];
	foreach ($queries as $modname => $query) {
		$mods_info[$modname] = $DB->get_records_sql($query);
	}
	$mods_info_indexed = [];
	foreach ($mods_info as $modname => $mods) {
		$new_mods = [];
		foreach ($mods as $mod) {
			$new_mods[$mod->id] = $mod;
		}
		$mods_info_indexed[$modname] = $new_mods;
	}
	foreach ($cms as $id => $cm) {
		$cms[$id] = ["cm" => $cm, "intro" => $mods_info_indexed[$cm->modname][$cm->instance]];
	}
	return array_values($cms);
}
function get_grid_context_front($userid)
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$mods_info = get_modules_info($config->rows);
	$user_courses = array_values(enrol_get_my_courses());
	/*
	$user_modules = get_course_modules($user_courses);
	var_dump($user_modules);
	die;
	*/
	$user_course_ids = array_map(function ($course) {
		return $course->id;
	}, $user_courses);
	$user_rows = get_user_rows($config, $user_course_ids);
	$rows_with_only_current_items = get_current_items($user_rows);
	$rows = array_values($rows_with_only_current_items);
	$scorm_attempts = get_scorm_attempts($userid);
	return [
		'cnn_academy' => [
			'carouselItems' => $config->carousel,
			'instructors' => $config->instructors,
			'modsInfo' => $mods_info,
			'rows' => $rows,
			'scormAttempts' => $scorm_attempts,
			'tags' => $config->tags,
		],
		'js_src_path' => $CFG->wwwroot . '/theme/academy/js/dist',
	];
};
