<?php

namespace theme_academy\output\core;

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/course/renderer.php');

class course_renderer extends \core_course_renderer
{
	public function render_activity_navigation(\core_course\output\activity_navigation $page)
	{
		return "";
	}
}
