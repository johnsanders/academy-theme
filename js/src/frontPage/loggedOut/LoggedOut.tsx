import ClientSegments from './ClientSegments';
import Contact from './Contact';
import FeaturedCourses from './FeaturedCourses';
import FeaturedSeminars from './FeaturedSeminars';
import Hero from './Hero';
import { MoodleAcademyFront } from '../../types';
import Navbar from '../../navbar';
import React from 'react';
import StudentContent from './StudentContent';
import Trainers from './Trainers';
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
						text: 'Current Academies',
						url: '#',
					},
					{
						text: 'Contact Us',
						url: '#',
					},
				]}
				templateType={props.cnnAcademy.templateType}
				visible={props.visible}
			/>
			<div className={`fadeIn ${props.visible ? '' : 'd-none'}`}>
				<Hero handleReady={props.handleComponentsReady} />
				<ClientSegments />
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
