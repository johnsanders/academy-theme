import ClientSegments from './ClientSegments';
import Contact from './Contact';
import Delivery from './Delivery';
import ExecEducation from './ExecEducation';
import Hero from './Hero';
import React from 'react';
import Trainers from './Trainers';
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
			<ClientSegments />
			<ExecEducation />
			<Delivery />
			<Trainers />
			<Contact />
		</div>,
		el,
	);
};

export default LoggedOut;
