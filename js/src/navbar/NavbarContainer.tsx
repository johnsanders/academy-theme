declare const navbarConfig: NavbarConfig;
import Navbar from './Navbar';
import { NavbarConfig } from '../types';
import React from 'react';

const largeThreshold = navbarConfig.isLoggedIn ? 50 : 400;
const NavbarContainer: React.FC = (): JSX.Element => {
	const stateRef = React.useRef(navbarConfig.isLoggedIn ? 'large' : 'none');
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLDivElement);
	const [largeIn, setLargeIn] = React.useState(stateRef.current === 'large');
	const [smallIn, setSmallIn] = React.useState(stateRef.current === 'small');
	const setLarge = (): void => {
		stateRef.current = 'large';
		drawerRef.current.classList.add('lower');
		setLargeIn(true);
		setSmallIn(false);
	};
	const setNone = (): void => {
		stateRef.current = 'none';
		drawerRef.current.classList.remove('lower');
		setLargeIn(false);
		setSmallIn(false);
	};
	const setSmall = (): void => {
		stateRef.current = 'small';
		setLargeIn(false);
		setSmallIn(true);
		drawerRef.current.classList.remove('lower');
	};
	React.useEffect(() => {
		const onScroll = () => {
			if (navbarConfig.isLoggedIn) {
				if (stateRef.current === 'small' && window.scrollY < largeThreshold) setLarge();
				else if (stateRef.current === 'large' && window.scrollY > largeThreshold) setSmall();
			} else {
				if (stateRef.current === 'large' && window.scrollY < largeThreshold) setNone();
				else if (stateRef.current === 'none' && window.scrollY > largeThreshold) setLarge();
			}
		};
		onScroll();
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<>
			<Navbar
				fixed={!navbarConfig.isLoggedIn}
				forceUserMenu={!navbarConfig.isLoggedIn}
				isIn={largeIn}
				size="large"
			/>
			<Navbar fixed={true} isIn={smallIn} size="small" />
		</>
	);
};

export default NavbarContainer;
