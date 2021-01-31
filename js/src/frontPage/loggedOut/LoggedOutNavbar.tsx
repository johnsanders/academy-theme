import Navbar from '../../navbar/';
import { NavbarConfig } from '../../types';
import React from 'react';

interface Props {
	config: NavbarConfig;
	templateType: string;
	visible: boolean;
}

const LoggedOutNavbar: React.FC<Props> = (props: Props) => (
	<Navbar
		config={props.config}
		extraLinks={[
			{
				text: 'Why CNN Academy?',
				url: '#',
			},
			{
				links: [
					{ text: '🇦🇪 Abu Dhabi Academy', url: '#' },
					{ text: '🇪🇸 CNN Academy Loyola', url: '#' },
				],
				text: 'Current Academies',
			},
			{
				text: 'Contact Us',
				url: 'https://commercial.cnn.com/contact-us',
			},
		]}
		templateType={props.templateType}
		visible={props.visible}
	/>
);

export default LoggedOutNavbar;
