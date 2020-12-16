<?php
defined('MOODLE_INTERNAL') || die();
user_preference_allow_ajax_update('drawer-open-nav', PARAM_ALPHA);
require_once($CFG->libdir . '/behat/lib.php');
require_once($CFG->dirroot . '/theme/academy/grid/get_grid_context.php');

$system_context = context_system::instance();
$show_nav_drawer = has_capability('moodle/site:manageblocks', $system_context, $USER);

$extraclasses = [];
$bodyattributes = $OUTPUT->body_attributes($extraclasses);
$blockshtml = $OUTPUT->blocks('side-pre');
$hasblocks = strpos($blockshtml, 'data-block=') !== false;
$buildregionmainsettings = !$PAGE->include_region_main_settings_in_header_actions();
$regionmainsettingsmenu = $buildregionmainsettings ? $OUTPUT->region_main_settings_menu() : false;
$is_front_page = $PAGE->has_set_url() && $PAGE->url->compare($system_context->get_url(), URL_MATCH_BASE);
$is_settings_page = $PAGE->has_set_url() && strpos((string)$PAGE->url, 'themesettingacademy') !== false;
$grid_context = get_grid_context($is_settings_page);
$sitename = format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]);

$nav_config = json_encode([
	"ariaLabel" => get_string("sitemenubar", "admin"),
	"customMenu" => $OUTPUT->custom_menu(),
	"isLoggedIn" => isloggedin(),
	"menuButtonName" => get_string("sidepanel", "core"),
	"navDrawerOpen" => $navdraweropen,
	"navbarPluginOutput" => $OUTPUT->navbar_plugin_output(),
	"pageHeadingMenu" => $OUTPUT->page_heading_menu(),
	"showNavToggle" => $show_nav_drawer,
	"siteName" => $sitename,
	"userMenu" => $OUTPUT->user_menu(),
]);

$templatecontext = [
	'bodyattributes' => $bodyattributes,
	'cnn_academy_json' => json_encode($grid_context['cnn_academy']),
	'firstcollectionlabel' => json_encode($PAGE->flatnav->get_collectionlabel()),
	'flatnavigation_json' => '[]', // json_encode($nav),
	'flatnavigation' => $PAGE->flatnav,
	'hasblocks' => $hasblocks,
	'hasregionmainsettingsmenu' => !empty($regionmainsettingsmenu),
	'is_front_page' => $is_front_page,
	'is_logged_in' => isloggedin(),
	'is_settings_page' => $is_settings_page,
	'js_src' => $grid_context['js_src'],
	'nav_config' => $nav_config,
	'navdraweropen' => $navdraweropen,
	'output' => $OUTPUT,
	'regionmainsettingsmenu' => $regionmainsettingsmenu,
	'show_nav_drawer' => $show_nav_drawer,
	'sidepreblocks' => $blockshtml,
	'sitename' => $sitename,
	'user_name_for_zoom_iframe' => urlencode($USER->firstname . ' ' . $USER->lastname),
];

echo $OUTPUT->render_from_template('theme_academy/columns2', $templatecontext);


/*
$nav_all = $PAGE->flatnav;
$nav = [];
$unwanted_navs = ['Private files', 'Content bank', 'Badges', 'Competencies'];
foreach ($nav_all as $nav_item) {
	if (!in_array($nav_item->text, $unwanted_navs)) array_push(
		$nav,
		[
			"action" => (string) $nav_item->action,
			"classes" => $nav_item->classes,
			"indent" => $nav_item->get_indent(),
			"icon" => $nav_item->icon,
			"is_section" => $nav_item->is_section,
			"isactive" => $nav_item->isactive,
			"parent" => $nav_item->parent,
			"showDivider" => $nav_item->showdivider(),
			"text" => $nav_item->text,
		],
	);
}
*