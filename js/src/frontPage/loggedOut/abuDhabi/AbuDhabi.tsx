import Hero from './Hero';
import Overview from './Overview';
import React from 'react';
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
			<Overview />
			<Who />
		</div>,
		el,
	);
};

export default LoggedOut;
