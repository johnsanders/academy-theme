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
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/bundle.js',
	];
}
function get_grid_context_front()
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$mods_info = get_modules_info($config->rows);
	$user_courses = enrol_get_my_courses();
	$user_course_ids = array_map(function ($course) {
		return $course->id;
	}, $user_courses);
	$user_rows = array_filter($config->rows, function ($row) use ($user_course_ids) {
		if (count($row->requiredCourses) === 0) return true;
		else {
			foreach ($user_course_ids as $user_course_id) {
				if (in_array($user_course_id, $row->requiredCourses)) return true;
			}
		}
		return false;
	});
	$now = time() * 1000;
	$rows_with_only_current_items = array_map(function ($row) use ($now) {
		$current_row_items = array_filter($row->items, function ($item) use ($now) {
			if (!$item->dateStart || !$item->dateEnd) return true;
			return $now > $item->dateStart && $now < $item->dateEnd;
		});
		$row->items = array_values($current_row_items);
		return $row;
	}, $user_rows);
	$rows = array_values($rows_with_only_current_items);
	return [
		'cnn_academy' => [
			'carouselItems' => $config->carousel,
			'instructors' => $config->instructors,
			'modsInfo' => $mods_info,
			'rows' => $rows,
			'tags' => $config->tags,
		],
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/bundle.js',
	];
};
