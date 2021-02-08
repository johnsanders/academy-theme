import Application from './Application';
import Curriculum from './Curriculum';
import Hero from './Hero';
import Intro from './Intro';
import Learn from './Learn';
import Overview from './Overview';
import Pitch from './Pitch';
import React from 'react';
import Video from './Video';
import Who from './Who';
import { createPortal } from 'react-dom';

interface Props {
	handleComponentsReady: () => void;
	visible: boolean;
}

const LoggedOut: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	if (!el) return null;
	return createPortal(
		<div className={`fadeIn ${props.visible ? '' : 'd-none'}`}>
			<Hero handleReady={props.handleComponentsReady} />
			<div className="d-flex justify-content-center py-2" style={{ backgroundColor: '#f1f1f2' }}>
				<strong className="mr-3">English</strong> <a href="?page=abudhabiarabic">العربية</a>
			</div>
			<Intro />
			<Overview />
			<Who />
			<Application />
			<Pitch />
			<Video />
			<Learn />
			<Curriculum />
		</div>,
		el,
	);
};

export default LoggedOut;
