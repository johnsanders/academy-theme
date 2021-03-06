<?php

namespace theme_academy\output;

defined('MOODLE_INTERNAL') || die();

class core_renderer extends \core_renderer
{
	public function render_login(\core_auth\output\login $form)
	{
		global $CFG, $SITE;
		$context = $form->export_for_template($this);
		// Override because rendering is not supported in template yet.
		if ($CFG->rememberusername == 0) {
			$context->cookieshelpiconformatted = $this->help_icon('cookiesenabledonlysession');
		} else {
			$context->cookieshelpiconformatted = $this->help_icon('cookiesenabled');
		}
		$context->errorformatted = $this->error_text($context->error);
		$url = $this->get_logo_url();
		if ($url) {
			$url = $url->out(false);
		}
		$context->logourl = $url;
		$context->sitename = format_string(
			$SITE->fullname,
			true,
			['context' => \context_course::instance(SITEID), "escape" => false]
		);
		return $this->render_from_template('theme_academy/loginform', $context);
	}

	public function full_header()
	{
		if (
			$this->page->include_region_main_settings_in_header_actions() &&
			!$this->page->blocks->is_block_present('settings')
		) {
			$this->page->add_header_action(\html_writer::div(
				$this->region_main_settings_menu(),
				'd-print-none',
				['id' => 'region-main-settings-menu']
			));
		}
		$header = new \stdClass();
		$header->settingsmenu = $this->context_header_settings_menu();
		$header->contextheader = $this->context_header();
		// $header->hasnavbar = empty($this->page->layout_options['nonavbar']);
		// $header->navbar = $this->navbar();
		$header->pageheadingbutton = $this->page_heading_button();
		$header->courseheader = $this->course_header();
		$header->headeractions = $this->page->get_header_actions();
		return $this->render_from_template('theme_academy/full_header', $header);
	}

	public function user_menu($user = null, $withlinks = null)
	{
		global $USER, $CFG;
		require_once($CFG->dirroot . '/user/lib.php');

		if (is_null($user)) {
			$user = $USER;
		}

		// Note: this behaviour is intended to match that of core_renderer::login_info,
		// but should not be considered to be good practice; layout options are
		// intended to be theme-specific. Please don't copy this snippet anywhere else.
		if (is_null($withlinks)) {
			$withlinks = empty($this->page->layout_options['nologinlinks']);
		}

		// Add a class for when $withlinks is false.
		$usermenuclasses = 'usermenu';
		if (!$withlinks) {
			$usermenuclasses .= ' withoutlinks';
		}

		$returnstr = "";
		if (during_initial_install()) {
			return $returnstr;
		}
		$loginpage = $this->is_login_page();
		$loginurl = get_login_url();
		if (!isloggedin()) {
			$returnstr = ''; // get_string('loggedinnot', 'moodle');
			if (!$loginpage) {
				$returnstr .= "<a href=\"$loginurl\">" . get_string('login', 'theme_academy') . '</a>';
			}
			return \html_writer::div(
				\html_writer::span($returnstr, 'login'),
				$usermenuclasses
			);
		}
		if (isguestuser()) {
			$returnstr = get_string('loggedinasguest');
			if (!$loginpage && $withlinks) {
				$returnstr .= " <a href=\"$loginurl\">" . get_string('login') . '</a>';
			}
			return \html_writer::div(
				\html_writer::span(
					$returnstr,
					'login'
				),
				$usermenuclasses
			);
		}

		$opts = user_get_user_navigation_info($user, $this->page);
		$usertextcontents = $opts->metadata['userfullname'];

		if (!empty($opts->metadata['asotheruser'])) {
			$usertextcontents = $opts->metadata['realuserfullname'];
			$usertextcontents .= \html_writer::tag(
				'span',
				get_string(
					'loggedinas',
					'moodle',
					\html_writer::span(
						$opts->metadata['userfullname'],
						'value'
					)
				),
				array('class' => 'meta viewingas')
			);
		}

		if (!empty($opts->metadata['asotherrole'])) {
			$role = \core_text::strtolower(preg_replace('#[ ]+#', '-', trim($opts->metadata['rolename'])));
			$usertextcontents .= \html_writer::span(
				$opts->metadata['rolename'],
				'meta role role-' . $role
			);
		}

		if (!empty($opts->metadata['userloginfail'])) {
			$usertextcontents .= \html_writer::span(
				$opts->metadata['userloginfail'],
				'meta loginfailures'
			);
		}

		$returnstr .= \html_writer::span($usertextcontents, 'usertext mr-1');

		$divider = new \action_menu_filler();
		$divider->primary = false;

		$am = new \action_menu();
		$am->set_menu_trigger(
			$returnstr
		);
		$am->set_action_label(get_string('usermenu'));
		$am->set_alignment(\action_menu::TR, \action_menu::BR);
		$am->set_nowrap_on_items();
		if ($withlinks) {
			$navitemcount = count($opts->navitems);
			$idx = 0;
			$unwantedLinks = ['mymoodle,admin', 'profile,moodle', 'grades,grades', 'messages,message'];
			array_unshift($opts->navitems, (object)[
				"itemtype" => "link",
				"url" => new \moodle_url('/calendar/view.php?view=month'),
				"title" => get_string('calendar', 'core_calendar'),
				"titleidentifier" => "calendar,moodle",
				"pix" => "i/calendar",
			]);
			foreach ($opts->navitems as $value) {
				// echo $value->pix;
				switch ($value->itemtype) {
					case 'divider':
						// If the nav item is a divider, add one and skip link processing.
						$am->add($divider);
						break;
					case 'invalid':
						// Silently skip invalid entries (should we post a notification?).
						break;
					case 'link':
						// Process this as a link item.
						if (in_array($value->titleidentifier, $unwantedLinks)) break;
						$pix = null;
						if (isset($value->pix) && !empty($value->pix)) {
							$pix = new \pix_icon($value->pix, '', null, array('class' => 'iconsmall'));
						} else if (isset($value->imgsrc) && !empty($value->imgsrc)) {
							$value->title = \html_writer::img(
								$value->imgsrc,
								$value->title,
								array('class' => 'iconsmall')
							) . $value->title;
						}
						$al = new \action_menu_link_secondary(
							$value->url,
							$pix,
							$value->title,
							array('class' => 'icon')
						);
						if (!empty($value->titleidentifier)) {
							$al->attributes['data-title'] = $value->titleidentifier;
						}
						$am->add($al);
						break;
				}

				$idx++;

				if ($idx == 1 || $idx == $navitemcount - 1) {
					// $am->add($divider);
				}
			}
		}
		return \html_writer::div(
			$this->render($am),
			$usermenuclasses
		);
	}
}
