import Carousel from './Carousel';
import Contact from './Contact';
import FeaturedCourses from './FeaturedCourses';
import FeaturedSeminars from './FeaturedSeminars';
import { MoodleAcademyFront } from '../../types';
import Navbar from '../../navbar';
import React from 'react';
import StudentContent from './StudentContent';
import Trainers from './Trainers';
import Why from './Why';
import { createPortal } from 'react-dom';

interface Props {
	cnnAcademy: MoodleAcademyFront;
	handleComponentsReady: () => void;
	visible: boolean;
}

const LoggedOut: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	if (!el) return null;
	return createPortal(
		<>
			<Navbar
				config={props.cnnAcademy.navbarConfig}
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
				templateType={props.cnnAcademy.templateType}
				visible={props.visible}
			/>
			<div className={`fadeIn ${props.visible ? '' : 'd-none'}`}>
				<Carousel handleReady={props.handleComponentsReady} />
				<Why />
				<FeaturedCourses />
				<FeaturedSeminars />
				<StudentContent />
				<Trainers />
				<Contact />
			</div>
		</>,
		el,
	);
};

export default LoggedOut;
