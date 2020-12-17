declare const cnnAcademy: MoodleAcademy;
import CSSTransition from 'react-transition-group/CSSTransition';
import { MoodleAcademy } from '../types';
import Navbar from './Navbar';
import React from 'react';
import SimpleMenu from './SimpleMenu';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const { navbarConfig } = cnnAcademy;
const largeThreshold = navbarConfig.isLoggedIn ? 50 : 400;

const NavbarContainer: React.FC = (): JSX.Element => {
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLElement);
	const [navState, setNavState] = React.useState(navbarConfig.isLoggedIn ? 'large' : 'none');
	const navStateRef = React.useRef(navState);
	navStateRef.current = navState;
	const setLarge = (): void => {
		drawerRef.current.classList.add('lower');
		setNavState('large');
	};
	const setNone = (): void => {
		drawerRef.current.classList.remove('lower');
		setNavState('none');
	};
	const setSmall = (): void => {
		setNavState('small');
		drawerRef.current.classList.remove('lower');
	};
	const handleDrawerToggleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
	};
	React.useEffect(() => {
		const onScroll = () => {
			if (navbarConfig.isLoggedIn) {
				if (navStateRef.current === 'small' && window.scrollY < largeThreshold) setLarge();
				else if (navStateRef.current === 'large' && window.scrollY > largeThreshold) setSmall();
			} else {
				if (navStateRef.current === 'large' && window.scrollY < largeThreshold) setNone();
				else if (navStateRef.current === 'none' && window.scrollY > largeThreshold) setLarge();
			}
		};
		onScroll();
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<TransitionGroup>
			{navState === 'large' ? (
				<CSSTransition classNames="navbar" timeout={300}>
					<Navbar
						fixed={!navbarConfig.isLoggedIn}
						handleDrawerToggleClick={handleDrawerToggleClick}
						size="large"
					/>
				</CSSTransition>
			) : null}
			{navState === 'small' ? (
				<CSSTransition classNames="navbar" timeout={300}>
					<Navbar fixed={true} handleDrawerToggleClick={handleDrawerToggleClick} size="small" />
				</CSSTransition>
			) : null}
			{navState === 'none' ? <SimpleMenu userMenu={navbarConfig.userMenu} /> : null}
		</TransitionGroup>
	);
};

export default NavbarContainer;
