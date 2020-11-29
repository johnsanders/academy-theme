<?php

defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {
	$settings = new theme_boost_admin_settingspage_tabs('themesettingacademy', 'CNN Academy Theme Settings');

	$page = new admin_settingpage('theme_academy_general', 'General Settings');
	$name = 'theme_academy/preset';
	$title = 'Preset';
	$description = 'Here are some pointless choices';
	$default = 'default.scss';
	$choices = ['Choice 1', 'Choice 2'];
	$setting = new admin_setting_configselect($name, $title, $description, $default, $choices);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$page->add($setting);
	$settings->add($page);

	$page = new admin_settingpage('theme_academy_other', 'Other');

	$setting = new admin_setting_configtextarea(
		'theme_academy/random_text',
		'Random Text',
		'This text does absolutely nothing.',
		'',
		PARAM_RAW
	);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$page->add($setting);

	$setting = new admin_setting_configtextarea(
		'theme_academy/more_random_text',
		'More Random Text',
		'This one is even more pointless.',
		'',
		PARAM_RAW
	);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$page->add($setting);

	$settings->add($page);
}
