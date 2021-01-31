import Engaging from './Engaging';
import Pedagogy from './Pedagogy';
import React from 'react';
import ThreeReasons from './ThreeReasons';

interface Props {
	handleComponentsReady: () => void;
	visible: boolean;
}

const WhyCnn: React.FC<Props> = (props: Props): JSX.Element => {
	React.useEffect(() => props.handleComponentsReady(), []);
	return (
		<div style={{ backgroundColor: 'white', padding: '5em 0' }}>
			<div style={{ paddingBottom: '2em' }}>
				<h1 className="text-center fontBlack">WHY CNN ACADEMY?</h1>
			</div>
			<ThreeReasons />
			<Pedagogy />
			<Engaging />
		</div>
	);
};
export default WhyCnn;
