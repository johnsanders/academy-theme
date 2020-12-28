import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { MoodleAcademyFront } from '../types';
import React from 'react';

interface Props {
	cnnAcademy: MoodleAcademyFront;
	setLoading: (loading: boolean) => void;
	visible: boolean;
}

const FrontPage: React.FC<Props> = (props: Props): JSX.Element => {
	return props.cnnAcademy.navbarConfig.isLoggedIn ? (
		<LoggedIn cnnAcademy={props.cnnAcademy} setLoading={props.setLoading} visible={props.visible} />
	) : (
		<LoggedOut setLoading={props.setLoading} visible={props.visible} />
	);
};

export default FrontPage;
