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

$templatecontext = [
	'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
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
];

$navAll = $PAGE->flatnav;
$nav = [];
$unwantedNavs = ['Private files', 'Content bank'];
foreach ($navAll as $navItem) {
	if (!in_array($navItem->text, $unwantedNavs)) array_push($nav, $navItem);
}
$templatecontext['flatnavigation'] = $nav;
$templatecontext['firstcollectionlabel'] = $navAll->get_collectionlabel();
echo $OUTPUT->render_from_template('theme_academy/columns2', $templatecontext);
