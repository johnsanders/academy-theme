declare const cnnAcademy: MoodleAcademy;
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { MoodleAcademy } from '../types';
import React from 'react';

const FrontPage: React.FC = (): JSX.Element =>
	cnnAcademy.navbarConfig.isLoggedIn ? <LoggedIn /> : <LoggedOut />;

export default FrontPage;
