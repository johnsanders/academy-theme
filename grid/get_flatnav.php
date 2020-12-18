<?php

$nav_all = $PAGE->flatnav;
$flatnav = [];
$unwanted_navs = ['Private files', 'Content bank', 'Badges', 'Competencies'];
foreach ($nav_all as $nav_item) {
	if (!in_array($nav_item->text, $unwanted_navs)) array_push(
		$flatnav,
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
