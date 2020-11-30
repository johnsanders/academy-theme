<?php

require_once($CFG->dirroot . '/theme/academy/grid/fetch_rows.php');
function get_grid_context()
{
	global $CFG;
	$config = json_decode(get_config("theme_academy", "grid_config"));
	$user_courses = enrol_get_my_courses();
	$user_course_ids = array_map(function ($course) {
		return $course->id;
	}, $user_courses);
	$rows_assoc = array_filter($config->rows, function ($row) use ($user_course_ids) {
		if (count($row->requiredCourses) === 0) return true;
		else {
			foreach ($user_course_ids as $user_course_id) {
				if (in_array($user_course_id, $row->required_courses)) return true;
			}
		}
		return false;
	});
	$rows = array_values($rows_assoc);
	$context = [
		'carousel_json' => json_encode($config->carousel),
		'js_src' => $CFG->wwwroot . '/theme/academy/js/dist/bundle.js',
		'rows_json' => json_encode($rows),
	];
	return $context;
};
