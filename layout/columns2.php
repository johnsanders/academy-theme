<?php
defined('MOODLE_INTERNAL') || die();
user_preference_allow_ajax_update('drawer-open-nav', PARAM_ALPHA);
require_once($CFG->libdir . '/behat/lib.php');
require_once($CFG->dirroot . '/theme/academy/grid/get_grid_context.php');

if (isloggedin()) {
	$navdraweropen = (get_user_preferences('drawer-open-nav', 'true') == 'true');
} else {
	$navdraweropen = false;
}
$extraclasses = [];
if ($navdraweropen) {
	$extraclasses[] = 'drawer-open-left';
}
$bodyattributes = $OUTPUT->body_attributes($extraclasses);
$blockshtml = $OUTPUT->blocks('side-pre');
$hasblocks = strpos($blockshtml, 'data-block=') !== false;
$buildregionmainsettings = !$PAGE->include_region_main_settings_in_header_actions();
$regionmainsettingsmenu = $buildregionmainsettings ? $OUTPUT->region_main_settings_menu() : false;
$is_front_page = $PAGE->has_set_url() && $PAGE->url->compare(context_system::instance()->get_url(), URL_MATCH_BASE);
$grid_config = get_grid_context();
$sitename = format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]);

$nav_config = json_encode([
	"ariaLabel" => get_string("sitemenubar", "admin"),
	"customMenu" => $OUTPUT->custom_menu(),
	"isLoggedIn" => isloggedin(),
	"logoUrl" => (string) $OUTPUT->get_compact_logo_url(),
	"menuButtonName" => get_string("sidepanel", "core"),
	"navDrawerOpen" => $navdraweropen,
	"navbarPluginOutput" => $OUTPUT->navbar_plugin_output(),
	"pageHeadingMenu" => $OUTPUT->page_heading_menu(),
	"siteName" => $sitename,
	"userMenu" => $OUTPUT->user_menu(),
]);
$templatecontext = [
	'sitename' => $sitename,
	'output' => $OUTPUT,
	'sidepreblocks' => $blockshtml,
	'hasblocks' => $hasblocks,
	'bodyattributes' => $bodyattributes,
	'navdraweropen' => $navdraweropen,
	'regionmainsettingsmenu' => $regionmainsettingsmenu,
	'hasregionmainsettingsmenu' => !empty($regionmainsettingsmenu),
	'is_logged_in' => isloggedin(),
	'is_front_page' => $is_front_page,
	'rows_json' => $grid_config["rows_json"],
	'carousel_json' => $grid_config["carousel_json"],
	'js_src' => $grid_config["js_src"],
	'nav_config' => $nav_config,
];

$nav_all = $PAGE->flatnav;
$nav = [];
$unwanted_navs = ['Private files', 'Content bank', 'Badges', 'Competencies'];
foreach ($nav_all as $nav_item) {
	if (!in_array($nav_item->text, $unwanted_navs)) array_push(
		$nav,
		[
			"action" => $nav_item->action,
			"get_indent" => $nav_item->get_indent(),
			"icon" => $nav_item->icon,
			"is_section" => $nav_item->is_section,
			"isactive" => $nav_item->isactive,
			"text" => $nav_item->text,
		],
	);
}

$templatecontext['flatnavigation'] = $nav;
$templatecontext['firstcollectionlabel'] = $nav_all->get_collectionlabel();
echo $OUTPUT->render_from_template('theme_academy/columns2', $templatecontext);
