<?php

require_once(__DIR__ . '/../../../config.php');
require_once($CFG->dirroot . '/theme/academy/classes/upload_carousel_image.php');


$PAGE->set_url(new moodle_url('/theme/academy/grid/upload_image.php'));
$PAGE->set_context(context_system::instance());
$PAGE->set_title('Upload Academy Carousel Image');
$PAGE->set_heading('Upload Academy Carousel Image');

$mform = new upload_carousel_image();
$component_name = 'theme_academy';
$context = context_system::instance();
$file_area = 'carousel';
$file_id = 0;


if ($mform->is_cancelled()) {
	redirect($CFG->wwwroot . '/admin/settings.php?section=themesettingacademy&tab=carousel');
} else if ($data = $mform->get_data()) {
	$mform->save_stored_file('carousel_image', $context->id, $component_name, $file_area, $file_id, '/', null);
	redirect($CFG->wwwroot . '/admin/settings.php?section=themesettingacademy&tab=uploads', 'Image uploaded successfully');
}

echo $OUTPUT->header();
$mform->display();
echo $OUTPUT->footer();
