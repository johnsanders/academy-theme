<?php
defined('MOODLE_INTERNAL') || die();
user_preference_allow_ajax_update('drawer-open-nav', PARAM_ALPHA);
require_once($CFG->libdir . '/behat/lib.php');
require_once($CFG->dirroot . '/theme/academy/grid/get_grid_context.php');
require_once($CFG->dirroot . '/theme/academy/grid/get_nav_config.php');
// require_once($CFG->dirroot . '/theme/academy/grid/get_flatnav.php');

$system_context = context_system::instance();
$show_nav_drawer = has_capability('moodle/site:manageblocks', $system_context, $USER);

$extraclasses = [];
$bodyattributes = $OUTPUT->body_attributes($extraclasses);
$blockshtml = $OUTPUT->blocks('side-pre');
$hasblocks = strpos($blockshtml, 'data-block=') !== false;
$buildregionmainsettings = !$PAGE->include_region_main_settings_in_header_actions();
$regionmainsettingsmenu = $buildregionmainsettings ? $OUTPUT->region_main_settings_menu() : false;
$grid_context = get_grid_context_front($USER->id);
$sitename = format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]);

$templatecontext = [
	'bodyattributes' => $bodyattributes,
	'cnn_academy_json' => json_encode($grid_context['cnn_academy']),
	'firstcollectionlabel' => json_encode($PAGE->flatnav->get_collectionlabel()),
	'flatnavigation_json' => '[]', // json_encode($flatnav),
	'flatnavigation' => $PAGE->flatnav,
	'hasblocks' => $hasblocks,
	'hasregionmainsettingsmenu' => !empty($regionmainsettingsmenu),
	'js_src_path' => $grid_context['js_src_path'],
	'nav_config' => get_nav_config($OUTPUT, $navdraweropen, $sitename, $show_nav_drawer),
	'navdraweropen' => $navdraweropen,
	'output' => $OUTPUT,
	'regionmainsettingsmenu' => $regionmainsettingsmenu,
	'show_nav_drawer' => $show_nav_drawer,
	'sidepreblocks' => $blockshtml,
	'sitename' => $sitename,
];

if (isloggedin())
	echo $OUTPUT->render_from_template('theme_academy/front_page_logged_in', $templatecontext);
else
	echo $OUTPUT->render_from_template('theme_academy/front_page_logged_out', $templatecontext);
