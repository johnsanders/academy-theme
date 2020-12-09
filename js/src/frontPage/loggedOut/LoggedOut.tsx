import ClientSegments from './ClientSegments';
import Contact from './Contact';
import Delivery from './Delivery';
import ExecEducation from './ExecEducation';
import Hero from './Hero';
import React from 'react';
import Trainers from './Trainers';
import { createPortal } from 'react-dom';

const LoggedOut: React.FC = (): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	if (!el) return null;
	return createPortal(
		<>
			<Hero />
			<ClientSegments />
			<ExecEducation />
			<Delivery />
			<Trainers />
			<Contact />
		</>,
		el,
	);
};

export default LoggedOut;
