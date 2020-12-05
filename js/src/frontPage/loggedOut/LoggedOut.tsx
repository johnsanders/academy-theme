import ClientSegments from './ClientSegments';
import Delivery from './Delivery';
import ExecEducation from './ExecEducation';
import Hero from './Hero';
import React from 'react';
import Trainers from './Trainers';

const LoggedOut: React.FC = (): JSX.Element => {
	return (
		<>
			<Hero />
			<ClientSegments />
			<ExecEducation />
			<Delivery />
			<Trainers />
		</>
	);
};

export default LoggedOut;
