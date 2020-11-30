<?php
function user_is_in_class($class_id, $user_classes)
{
	foreach ($user_classes as $user_class) {
		if ($user_class["id"] === $class_id) return true;
	}
	return false;
};
function get_user_row_ids($all_modules, $user_course_ids)
{
	$all_row_ids = [];
	foreach ($all_modules as $item) {
		if (!in_array($item->row_id, $all_row_ids)) {
			if ($item->required_courses === "0") {
				array_push($all_row_ids, $item->row_id);
			} else {
				$required_course_ids = explode(',', $item->required_courses);
				foreach ($user_course_ids as $user_course_id) {
					if (in_array($user_course_id, $required_course_ids)) {
						array_push($all_row_ids, $item->row_id);
						break;
					}
				}
			}
		}
	}
	return $all_row_ids;
}
function get_user_modules($all_modules, $user_row_ids)
{
	$user_modules = [];
	foreach ($all_modules as $module) {
		if (in_array($module->row_id, $user_row_ids)) {
			array_push($user_modules, $module);
		}
	}
	return $user_modules;
}


function fetch_rows($user_courses)
{
	global $DB;
	$all_modules = $DB->get_records_sql('SELECT
		i.id AS item_id,
		i.name as item_name,
		i.url,
		i.thumb_url,
		i.order_index,
		r.id as row_id,
		r.title AS row_title,
		r.required_courses
		FROM mdl_block_academy_grid_rows r
		JOIN mdl_block_academy_grid_items i ON r.id = i.row_id;
	');
	$user_course_ids = array_map(function ($course) {
		return $course->id;
	}, array_values($user_courses));
	$user_row_ids = get_user_row_ids($all_modules, $user_course_ids);
	$user_modules = get_user_modules($all_modules, $user_row_ids);
	$all_rows = array_map(function ($row_id) use ($user_modules) {
		$items = array_values(array_filter($user_modules, function ($item) use ($row_id) {
			return $item->row_id === $row_id;
		}));
		if (count($items) === 0) return NULL;
		$first_item = $items[array_key_first($items)];
		$ret = new stdClass();
		$ret->id = $row_id;
		$ret->title = $first_item->row_title;
		$ret->required_courses = $first_item->required_courses;
		$ret->items = $items;
		return $ret;
	}, $user_row_ids);
	return $all_rows;
};
