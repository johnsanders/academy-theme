<?php

defined('MOODLE_INTERNAL') || die();

require_once($CFG->libdir . '/ddllib.php');
require_once($CFG->libdir . '/xmlize.php');
require_once($CFG->libdir . '/messagelib.php');

class admin_setting_configacademygrid extends admin_setting
{
	public $paramtype;

	public function __construct($name, $visiblename, $description, $defaultsetting, $paramtype = PARAM_RAW)
	{
		$this->paramtype = $paramtype;
		parent::__construct($name, $visiblename, $description, $defaultsetting);
	}
	public function get_setting()
	{
		return $this->config_read($this->name);
	}

	public function write_setting($data)
	{
		return ($this->config_write($this->name, $data) ? '' : get_string('errorsetting', 'admin'));
	}
	private function get_files($file_area)
	{
		$fs = get_file_storage();
		$component_name = 'theme_academy';
		$context = context_system::instance();
		$file_id = 0;
		$files = $fs->get_area_files($context->id, $component_name, $file_area, $file_id);
		$urls = [];
		foreach ($files as $file) {
			$filename = $file->get_filename();
			if ($filename === '.') continue;
			$url = moodle_url::make_pluginfile_url(
				$file->get_contextid(),
				$component_name,
				$file_area,
				$file->get_itemid(),
				$file->get_filepath(),
				$filename
			);
			array_push($urls, (string) $url);
		}
		return $urls;
	}
	private function get_courses()
	{
		global $DB;
		$courses_list = $DB->get_records('course', null, '', 'id,fullname');
		$courses_associative = array_map(function ($course) {
			$cm = get_fast_modinfo($course->id);
			$cms = $cm->get_cms();
			$modules = [];
			$modules = array_map(function ($my_cm) {
				return ["id" => $my_cm->id, "modname" => $my_cm->modname, "module" => $my_cm->module, "name" => $my_cm->name];
			}, $cms);
			$course->modules = array_values($modules);
			return $course;
		}, $courses_list);
		return array_values($courses_associative);
	}
	public function output_html($data, $query = '')
	{
		global $CFG,  $OUTPUT;
		$thumb_urls = $this->get_files("thumbs");
		$carousel_urls = $this->get_files("carousel");
		$avatar_urls = $this->get_files("avatars");
		$courses = $this->get_courses();
		$default = $this->get_defaultsetting();
		$context = (object) [
			'avatarUrlsJson' => json_encode($avatar_urls),
			'carouselUrlsJson' => json_encode($carousel_urls),
			'coursesJson' => json_encode($courses),
			'id' => $this->get_id(),
			'jsSrc' => $CFG->wwwroot . '/theme/academy/js/dist/bundle.js',
			'name' => $this->get_full_name(),
			'thumbUrlsJson' => json_encode($thumb_urls),
			'wwwroot' => $CFG->wwwroot,
			'value' => $data,
		];
		$element = $OUTPUT->render_from_template('theme_academy/setting_academy_grid', $context);
		return format_admin_setting($this, $this->visiblename, $element, $this->description, true, '', $default, $query);
	}
}
