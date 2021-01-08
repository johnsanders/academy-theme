<?php
defined('MOODLE_INTERNAL') || die();
$THEME->name = 'academy';
$THEME->sheets = [];
$THEME->editor_sheets = [];
$THEME->parents = [];
$THEME->enable_dock = false;
$THEME->yuicssmodules = array();
$THEME->rendererfactory = 'theme_overridden_renderer_factory';
$THEME->requiredblocks = '';
$THEME->addblockposition = BLOCK_ADDBLOCK_POSITION_FLATNAV;
$THEME->scss = function ($theme) {
	return theme_academy_get_main_scss_content($theme);
};

$THEME->layouts = [
	'base' => array(
		'file' => 'main.php',
		'regions' => array(),
	),
	'standard' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
	),
	'course' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
		'options' => array('langmenu' => true),
	),
	'coursecategory' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
	),
	'incourse' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
	),
	'frontpage' => array(
		'file' => 'front_page.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
		'options' => array('nonavbar' => true),
	),
	'admin' => array(
		'file' => 'settings.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
	),
	'mydashboard' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
		'options' => array('nonavbar' => true, 'langmenu' => true, 'nocontextheader' => true),
	),
	'mypublic' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
	),
	'login' => array(
		'file' => 'login.php',
		'regions' => array(),
		'options' => array('langmenu' => true),
	),
	'popup' => array(
		'file' => 'columns1.php',
		'regions' => array(),
		'options' => array('nofooter' => true, 'nonavbar' => true),
	),
	'frametop' => array(
		'file' => 'columns1.php',
		'regions' => array(),
		'options' => array('nofooter' => true, 'nocoursefooter' => true),
	),
	'embedded' => array(
		'file' => 'embedded.php',
		'regions' => array()
	),
	'maintenance' => array(
		'file' => 'maintenance.php',
		'regions' => array(),
	),
	'print' => array(
		'file' => 'columns1.php',
		'regions' => array(),
		'options' => array('nofooter' => true, 'nonavbar' => false),
	),
	'redirect' => array(
		'file' => 'embedded.php',
		'regions' => array(),
	),
	'report' => array(
		'file' => 'main.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre',
	),
	'secure' => array(
		'file' => 'secure.php',
		'regions' => array('side-pre'),
		'defaultregion' => 'side-pre'
	)
];
