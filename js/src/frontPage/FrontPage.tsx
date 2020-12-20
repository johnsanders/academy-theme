declare const cnnAcademy: MoodleAcademy;
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { MoodleAcademy } from '../types';
import React from 'react';

interface Props {
	setLoading: (loading: boolean) => void;
	visible: boolean;
}

const FrontPage: React.FC<Props> = (props: Props): JSX.Element => {
	return cnnAcademy.navbarConfig.isLoggedIn ? (
		<LoggedIn setLoading={props.setLoading} visible={props.visible} />
	) : (
		<LoggedOut setLoading={props.setLoading} visible={props.visible} />
	);
};

export default FrontPage;
