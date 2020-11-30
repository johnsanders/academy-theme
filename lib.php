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

function theme_academy_pluginfile($course, $cm, $context, $filearea, $args, $forcedownload, array $options = array())
{
	if ($context->contextlevel !== CONTEXT_SYSTEM) return false;
	if ($filearea !== 'thumbs' && $filearea !== 'carousel' && $filearea !== 'avatars') return false;
	require_login($course, true);
	$itemid = array_shift($args);

	$filename = array_pop($args);
	if (!$args) $filepath = '/';
	else $filepath = '/' . implode('/', $args) . '/';

	$fs = get_file_storage();
	$file = $fs->get_file($context->id, 'theme_academy', $filearea, $itemid, $filepath, $filename);
	if (!$file) return false;
	send_stored_file($file, 86400, 0, $forcedownload, $options);
}
