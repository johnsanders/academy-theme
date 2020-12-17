<?php

require_once(__DIR__ . '/../../../config.php');
require_once($CFG->dirroot . '/theme/academy/classes/upload_avatar.php');

$PAGE->set_url(new moodle_url('/theme/academy/grid/upload_avatar.php'));
$PAGE->set_context(context_system::instance());
$PAGE->set_title('Upload Instructor Avatar');
$PAGE->set_heading('Upload Instructor Avatar');

$mform = new upload_avatar();
$component_name = 'theme_academy';
$context = context_system::instance();
$file_area = 'avatars';
$file_id = 0;
$avatar_size = 120;

function crop_to_square($im)
{
	global $avatar_size;
	$aspect = 1;
	$width = imagesx($im);
	$height = imagesy($im);
	if ($width > $height) {
		$new_width = $height * $aspect;
		$width_difference = $width - $new_width;
		$cropped = imagecrop($im, [
			'height' => $height,
			'width' => $new_width,
			'x' => $width_difference / 2,
			'y' => 0,
		]);
		return imagescale($cropped, $avatar_size, $avatar_size);
	} else {
		$new_height = $width / $aspect;
		$height_difference = $height - $new_height;
		$cropped = imagecrop($im, [
			'height' => $new_height,
			'width' => $width,
			'x' => 0,
			'y' => $height_difference / 2,
		]);
		return imagescale($cropped, $avatar_size, $avatar_size);
	}
}

if ($mform->is_cancelled()) {
	redirect($CFG->wwwroot . '/admin/settings.php?section=themesettingacademy&tab=instructors');
} else if ($data = $mform->get_data()) {
	$fs = get_file_storage();
	$content = $mform->get_file_content('avatar');
	$name = $mform->get_new_filename('avatar');
	$im = imagecreatefromstring($content);
	$cropped = crop_to_square($im);
	$scaled = imagescale($cropped, 100, 100);
	$tmp_path = tempnam(sys_get_temp_dir(), 'tmpimg');
	imagejpeg($scaled, $tmp_path);
	$file_info = [
		'component' => $component_name,
		'contextid' => $context->id,
		'filearea' => $file_area,
		'itemid' => $file_id,
		'filepath' => '/',
		'filename' => $name,
	];
	$res = $fs->create_file_from_pathname($file_info, $tmp_path);
	redirect($CFG->wwwroot . '/admin/settings.php?section=themesettingacademy&tab=uploads', 'Image uploaded successfully');
}

echo $OUTPUT->header();
$mform->display();
echo $OUTPUT->footer();
