declare const cnnAcademy: MoodleAcademy;
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MoodleAcademy } from '../types';
import Navbar from './Navbar';
import React from 'react';

const { navbarConfig } = cnnAcademy;
const largeThreshold = navbarConfig.isLoggedIn ? 50 : 400;

interface Props {
	setDrawerOpen: (drawerOpen: boolean) => void;
}

const NavbarContainer: React.FC<Props> = (props: Props): JSX.Element => {
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
		const drawerOpen = !drawerRef.current.classList.contains('closed');
		console.log(drawerOpen);
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
	React.useEffect(() => {
		if (cnnAcademy.drawer) cnnAcademy.drawer.init();
	}, [navState]);
	return (
		<TransitionGroup>
			{navState === 'large' ? (
				<CSSTransition classNames="navbar" timeout={300}>
					<Navbar
						fixed={!navbarConfig.isLoggedIn}
						forceUserMenu={!navbarConfig.isLoggedIn}
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
		</TransitionGroup>
	);
};

export default NavbarContainer;
