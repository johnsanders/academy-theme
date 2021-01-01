<?php

require_once(__DIR__ . '/../../../config.php');
require_once($CFG->dirroot . '/theme/academy/classes/upload_grid_image.php');


$PAGE->set_url(new moodle_url('/theme/academy/grid/upload_grid_image.php'));
$PAGE->set_context(context_system::instance());
$PAGE->set_title('Upload Academy Grid Image');
$PAGE->set_heading('Upload Academy Grid Image');

$mform = new upload_grid_image();
$component_name = 'theme_academy';
$context = context_system::instance();
$file_area = 'thumbs';
$file_id = 0;
$sizes = ["collectionThumb" => [480, 270], "gridThumb" => [320, 180]];

function crop_to_16_9($im)
{
	$aspect = 16 / 9;
	$width = imagesx($im);
	$height = imagesy($im);
	if ($width > $height) {
		$new_width = $height * $aspect;
		$width_difference = $width - $new_width;
		return imagecrop($im, [
			'height' => $height,
			'width' => $new_width,
			'x' => $width_difference / 2,
			'y' => 0,
		]);
	} else {
		$new_height = $width / $aspect;
		$height_difference = $height - $new_height;
		return imagecrop($im, [
			'height' => $new_height,
			'width' => $width,
			'x' => 0,
			'y' => $height_difference / 2,
		]);
	}
}

if ($mform->is_cancelled()) {
	redirect($CFG->wwwroot . '/admin/settings.php?section=themesettingacademy&tab=grid');
} else if ($data = $mform->get_data()) {
	$fs = get_file_storage();
	$content = $mform->get_file_content('grid_image');
	$name = $mform->get_new_filename('grid_image');
	$im = imagecreatefromstring($content);
	$cropped = crop_to_16_9($im);
	$size = $sizes[$data->image_type];
	$scaled = imagescale($cropped, $size[0], $size[1]);
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
