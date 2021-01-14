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
	global $DB;
	$attempts = array_values($DB->get_records(
		'scorm_scoes_track',
		array("element" => "cmi.core.score.raw", "userid" => $userid),
		'',
		'id, userid, scormid, value'
	));
	$attempts[1]->value = "89";
	$groups = [];
	foreach ($attempts as $attempt) {
		if (array_key_exists($attempt->scormid, $groups)) {
			array_push($groups[$attempt->scormid], $attempt);
		} else {
			$groups[$attempt->scormid] = [$attempt];
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
function get_js_bundle_filename($dir_root)
{
	$manifest = json_decode(file_get_contents($dir_root . '/theme/academy/js/dist/manifest.json'));
	return preg_replace('/^auto/', '', $manifest->{'main.js'});
}
function get_grid_context_settings()
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$mods_info = get_modules_info($config->rows);
	$js_bundle_filename = get_js_bundle_filename($CFG->dirroot);
	return [
		'cnn_academy' => [
			'carouselItems' => $config->carousel,
			'instructors' => $config->instructors,
			'modsInfo' => $mods_info,
			'rows' => $config->rows,
			'tags' => $config->tags,
		],
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/' . $js_bundle_filename,
	];
}
function get_grid_context_front($userid)
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$mods_info = get_modules_info($config->rows);
	$user_courses = enrol_get_my_courses();
	$user_course_ids = array_map(function ($course) {
		return $course->id;
	}, $user_courses);
	$user_rows = get_user_rows($config, $user_course_ids);
	$rows_with_only_current_items = get_current_items($user_rows);
	$rows = array_values($rows_with_only_current_items);
	$scorm_attempts = get_scorm_attempts($userid);
	$js_bundle_filename = get_js_bundle_filename($CFG->dirroot);
	return [
		'cnn_academy' => [
			'carouselItems' => $config->carousel,
			'instructors' => $config->instructors,
			'modsInfo' => $mods_info,
			'rows' => $rows,
			'scormAttempts' => $scorm_attempts,
			'tags' => $config->tags,
		],
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/' . $js_bundle_filename,
	];
};
