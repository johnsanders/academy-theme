declare const cnnAcademy: MoodleAcademy;
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { MoodleAcademy } from '../types';
import React from 'react';

interface Props {
	loading: boolean;
	setLoading: (loading: boolean) => void;
}

const FrontPage: React.FC<Props> = (props: Props): JSX.Element => {
	return cnnAcademy.navbarConfig.isLoggedIn ? (
		<LoggedIn loading={props.loading} setLoading={props.setLoading} />
	) : (
		<LoggedOut loading={props.loading} setLoading={props.setLoading} />
	);
};

export default FrontPage;
