declare const navbarConfig: NavbarConfig;
import Grid from '../grid';
import LoggedOut from '../loggedOut';
import { NavbarConfig } from '../types';
import React from 'react';

const FrontPage: React.FC = (): JSX.Element => {
	return navbarConfig.isLoggedIn ? <Grid /> : <LoggedOut />;
};

export default FrontPage;
