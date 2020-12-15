<?php
defined('MOODLE_INTERNAL') || die();

$templatecontext = [
	'output' => $OUTPUT,
	'sitename' => format_string($SITE->shortname, true, ["escape" => false]),
	'wwwroot' => $CFG->wwwroot,
];

echo $OUTPUT->render_from_template('theme_academy/maintenance', $templatecontext);
