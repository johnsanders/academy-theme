import Carousel from '../Carousel';
import Contact from './Contact';
import FeaturedCourses from './FeaturedCourses';
import FeaturedSeminars from './FeaturedSeminars';
import React from 'react';
import StudentContent from './StudentContent';
import Trainers from './Trainers';
import Why from './Why';
import { createPortal } from 'react-dom';

interface Props {
	handleComponentsReady: () => void;
	visible: boolean;
}

const Home: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	if (!el) return null;
	return createPortal(
		<>
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

export default Home;
