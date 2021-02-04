import Application from './Application';
import Hero from './Hero';
import Intro from './Intro';
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
		<div
			className={`fadeIn ${props.visible ? '' : 'd-none'}`}
			style={{
				direction: 'rtl',
				textAlign: 'right',
			}}
		>
			<Hero handleReady={props.handleComponentsReady} />
			<Intro />
			<Overview />
			<Who />
			<Application />
			<Pitch />
			<Video />
		</div>,
		el,
	);
};

export default LoggedOut;
