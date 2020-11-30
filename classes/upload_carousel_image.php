<?php

require_once("$CFG->libdir/formslib.php");

class upload_carousel_image extends moodleform
{
	public function definition()
	{
		$mform = $this->_form;
		$mform->addElement(
			'filepicker',
			'carousel_image',
			'New Carousel Image',
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
