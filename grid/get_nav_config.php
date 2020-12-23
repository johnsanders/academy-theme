<?php

function get_nav_config($OUTPUT, $navdraweropen, $sitename, $show_nav_drawer)
{
	$custom_menu = $OUTPUT->custom_menu();
	$custom_menu = str_replace(" - Internacional ‎(es)", "", $custom_menu);
	$custom_menu = str_replace(" ‎(en)", "", $custom_menu);
	return json_encode([
		"ariaLabel" => get_string("sitemenubar", "admin"),
		"customMenu" => $custom_menu,
		"isLoggedIn" => isloggedin(),
		"menuButtonName" => get_string("sidepanel", "core"),
		"navDrawerOpen" => $navdraweropen,
		"navbarPluginOutput" => $OUTPUT->navbar_plugin_output(),
		"pageHeadingMenu" => $OUTPUT->page_heading_menu(),
		"showNavToggle" => $show_nav_drawer,
		"siteName" => $sitename,
		"userMenu" => $OUTPUT->user_menu(),
	]);
}
