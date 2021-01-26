import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { MoodleAcademyFront } from '../types';
import React from 'react';

interface Props {
	cnnAcademy: MoodleAcademyFront;
	handleComponentsReady: () => void;
	visible: boolean;
}

const FrontPage: React.FC<Props> = (props: Props): JSX.Element => {
	return props.cnnAcademy.navbarConfig.isLoggedIn ? (
		<LoggedIn
			cnnAcademy={props.cnnAcademy}
			handleComponentsReady={props.handleComponentsReady}
			visible={props.visible}
		/>
	) : (
		<LoggedOut
			cnnAcademy={props.cnnAcademy}
			handleComponentsReady={props.handleComponentsReady}
			visible={props.visible}
		/>
	);
};

export default FrontPage;
