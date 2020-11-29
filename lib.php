<?php
defined('MOODLE_INTERNAL') || die();

function theme_academy_get_main_scss_content($theme)
{
	global $CFG;
	$scss = '';
	$scss .= file_get_contents($CFG->dirroot . '/theme/boost/scss/preset/default.scss');
	$pre = file_get_contents($CFG->dirroot . '/theme/academy/scss/pre.scss');
	$post = file_get_contents($CFG->dirroot . '/theme/academy/scss/post.scss');
	return $pre . "\n" . $scss . "\n" . $post;
}
