<?php

require_once("$CFG->libdir/formslib.php");

class upload_avatar extends moodleform
{
	public function definition()
	{
		$mform = $this->_form;
		$mform->addElement(
			'filepicker',
			'avatar',
			'New Instructor Avatar',
			null,
			array(
				'maxbytes' => 10485760, 'areamaxbytes' => 10485760,
				'accepted_types' => array('web_image')
			)
		);
		$this->add_action_buttons();
	}
	function validation($data, $files)
	{
		return array();
	}
}
