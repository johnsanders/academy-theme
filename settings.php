<?php
require_once($CFG->dirroot . '/theme/academy/grid/admin_setting_configacademygrid.php');
defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {
	$settings->add(new admin_setting_configacademygrid(
		'theme_academy/grid_config',
		'Grid Modules',
		'',
		'',
		PARAM_TEXT
	));
}
