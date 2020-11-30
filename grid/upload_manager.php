<?php

require_once(__DIR__ . '/../../../config.php');
require_admin();

function get_files($file_area)
{
	$fs = get_file_storage();
	$component_name = 'theme_academy';
	$context = context_system::instance();
	$file_id = 0;
	$files_info = $fs->get_area_files($context->id, $component_name, $file_area, $file_id);
	$files_all = array_map(function ($file) {
		$filename = $file->get_filename();
		$url = moodle_url::make_pluginfile_url(
			$file->get_contextid(),
			$file->get_component(),
			$file->get_filearea(),
			$file->get_itemid(),
			$file->get_filepath(),
			$filename
		);
		return [
			"contextid" => $file->get_contextid(),
			"filename" => $file->get_filename(),
			"filearea" => $file->get_filearea(),
			"filepath" => $file->get_filepath(),
			"itemid" => $file->get_itemid(),
			"url" => (string) $url,
		];
		return $file;
	}, $files_info);
	$files = array_filter($files_all, function ($file) {
		return $file["filename"] !== '.';
	});
	return array_values($files);
}

$PAGE->set_url(new moodle_url('/theme/academy/grid/upload_manager.php'));
$PAGE->set_context(context_system::instance());
$PAGE->set_title('Manage Academy Uploads');
$PAGE->set_heading('Manage Academy Uploads');

$file_areas = ['thumbs', 'avatars', 'carousel'];

$fs = get_file_storage();
$files = array_map(function ($file_area) {
	return [
		"area_name" => $file_area,
		"files" => get_files($file_area),
	];
}, $file_areas);

$template_context = [
	"all_files" => $files,
	"wwwroot" => $CFG->wwwroot,
];

if ($_GET["deleteId"]) {
	redirect($CFG->wwwroot . '/admin/settings.php?section=themesettingacademy&tab=uploads');
}

echo $OUTPUT->header();
echo $OUTPUT->render_from_template('theme_academy/grid_upload_manager', $template_context);
echo $OUTPUT->footer();
