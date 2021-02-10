<?php
function get_files($file_area)
{
	$fs = get_file_storage();
	$component_name = 'theme_academy';
	$context = context_system::instance();
	$file_id = 0;
	$files = $fs->get_area_files($context->id, $component_name, $file_area, $file_id);
	$urls = [];
	foreach ($files as $file) {
		$filename = $file->get_filename();
		if ($filename === '.') continue;
		$url = moodle_url::make_pluginfile_url(
			$file->get_contextid(),
			$component_name,
			$file_area,
			$file->get_itemid(),
			$file->get_filepath(),
			$filename
		);
		array_push($urls, (string) $url);
	}
	return $urls;
}
