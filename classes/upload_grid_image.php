<?php

require_once("$CFG->libdir/formslib.php");

class upload_grid_image extends moodleform
{
	public function definition()
	{
		$mform = $this->_form;
		$mform->addElement(
			'select',
			'image_type',
			'Type of Image',
			[
				"gridThumb" => "Grid Thumbnail",
				"collectionThumb" => "Collection Thumbnail"
			]
		);
		$mform->addElement(
			'filepicker',
			'grid_image',
			'New Academy Grid Image',
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
