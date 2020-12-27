<?php

function add_module_info($rows)
{
	$newRows = array_map(function ($row) {
		$items = array_map(function ($item) {
			if ($item->modName === 'manual') return $item;
			$moduleInfo = get_coursemodule_from_id($item->modName, $item->modId);
			$item->name = $moduleInfo->name;
			return $item;
		}, $row->items);
		$row->items = $items;
		return $row;
	}, $rows);
	return array_values($newRows);
}

function get_grid_context($is_settings_page)
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$config->rows = add_module_info($config->rows);
	if ($is_settings_page) return [
		'cnn_academy' => [
			'carouselItems' => $config->carousel,
			'instructors' => $config->instructors,
			'rows' => $config->rows,
			'tags' => $config->tags,
		],
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/bundle.js',
	];
	$user_courses = enrol_get_my_courses();
	$user_course_ids = array_map(function ($course) {
		return $course->id;
	}, $user_courses);
	$user_rows = array_filter($config->rows, function ($row) use ($user_course_ids) {
		if (count($row->requiredCourses) === 0) return true;
		else {
			foreach ($user_course_ids as $user_course_id) {
				if (in_array($user_course_id, $row->required_courses)) return true;
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
			'rows' => $rows,
			'tags' => $config->tags,
		],
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/bundle.js',
	];
};
