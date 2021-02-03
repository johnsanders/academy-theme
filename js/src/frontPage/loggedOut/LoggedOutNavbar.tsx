import Navbar from '../../navbar/';
import { NavbarConfig } from '../../types';
import React from 'react';

interface Props {
	config: NavbarConfig;
	forceSize?: 'large' | 'small';
	templateType: string;
	visible: boolean;
}

const LoggedOutNavbar: React.FC<Props> = (props: Props) => (
	<Navbar
		config={props.config}
		extraLinks={[
			{
				text: 'Why CNN Academy?',
				url: '?page=whycnn',
			},
			{
				text: 'Abu Dhabi Academy',
				url: '?page=abudhabi',
			},
			{
				text: 'Contact Us',
				url: 'https://commercial.cnn.com/contact-us',
			},
		]}
		forceSize={props.forceSize}
		templateType={props.templateType}
		visible={props.visible}
	/>
);

export default LoggedOutNavbar;
