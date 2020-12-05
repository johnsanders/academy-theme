declare const navbarConfig: NavbarConfig;
import Footer from '../shared/Footer';
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';
import { NavbarConfig } from '../types';
import React from 'react';

const FrontPage: React.FC = (): JSX.Element => {
	return (
		<>
			{navbarConfig.isLoggedIn ? <LoggedIn /> : <LoggedOut />}
			<Footer />
		</>
	);
};

export default FrontPage;
