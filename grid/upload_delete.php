<?php

require_once(__DIR__ . '/../../../config.php');
require_admin();

$PAGE->set_url(new moodle_url('/theme/academy/grid/upload_delete.php'));
$PAGE->set_context(context_system::instance());
$context = context_system::instance();

$fs = get_file_storage();
$file = $fs->get_file(
	$context->id,
	"block_academy_grid",
	$_GET["filearea"],
	$_GET["itemid"],
	$_GET["filepath"],
	$_GET["filename"]
);

if ($file) {
	$file->delete();
	redirect($CFG->wwwroot . '/theme/academy/grid/upload_manager.php', 'Image deleted');
}
redirect($CFG->wwwroot . '/theme/academy/grid/upload_manager.php', 'Image not found');
