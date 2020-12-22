<?php
defined('MOODLE_INTERNAL') || die();

$bodyattributes = $OUTPUT->body_attributes();

$templatecontext = [
	'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
	'output' => $OUTPUT,
	'bodyattributes' => $bodyattributes,
	'wwwroot' => $CFG->wwwroot,
];

echo $OUTPUT->render_from_template('theme_academy/login', $templatecontext);
