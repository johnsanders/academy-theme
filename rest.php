<?php


if (!defined('AJAX_SCRIPT')) define('AJAX_SCRIPT', true);

require_once(__DIR__ . '/../../config.php');

require_login(3);
require_admin();

$course_id = required_param('courseId', PARAM_INT);
$coursemod = optional_param('coursemodule', '', PARAM_INT);

$PAGE->set_url('/theme/academy/rest.php');

echo $OUTPUT->header();

if ($coursemod === '') {
	$course_academy_field = $DB->get_record('customfield_data', ["instanceid" => $course_id], "id,value");
	echo json_encode($course_academy_field);
} else {
	echo "Heyyyyy";
}
