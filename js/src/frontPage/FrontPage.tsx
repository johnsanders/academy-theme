declare const navbarConfig: NavbarConfig;
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { NavbarConfig } from '../types';
import React from 'react';

const FrontPage: React.FC = (): JSX.Element => {
	return navbarConfig.isLoggedIn ? <LoggedIn /> : <LoggedOut />;
};

export default FrontPage;
