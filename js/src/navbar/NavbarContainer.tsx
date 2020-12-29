import Navbar from './Navbar';
import { NavbarConfig } from '../types';
import React from 'react';
import SimpleMenu from './SimpleMenu';

interface Props {
	config: NavbarConfig;
	templateType: string;
	visible: boolean;
}

const NavbarContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const largeThreshold = props.config.isLoggedIn ? 50 : 400;
	const shouldHideLargeNavbar =
		!props.config.isLoggedIn && !(document.title === 'Forgotten password');
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLElement);
	const [navState, setNavState] = React.useState(
		props.config.isLoggedIn || document.title === 'Forgotten password' ? 'large' : 'none',
	);
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
	const onScroll = () => {
		if (shouldHideLargeNavbar) {
			if (navState === 'large' && window.scrollY < largeThreshold) setNone();
			else if (navState === 'none' && window.scrollY > largeThreshold) setLarge();
		} else {
			if (navState === 'small' && window.scrollY < largeThreshold) setLarge();
			else if (navState === 'large' && window.scrollY > largeThreshold) setSmall();
		}
	};
	React.useEffect(() => {
		onScroll();
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, [onScroll]);
	const fadeClass = props.templateType === 'front_page_logged_out' ? '' : 'fadeIn';
	return (
		<div className={`${fadeClass} ${props.visible ? '' : 'd-none'}`}>
			{navState === 'none' ? (
				<SimpleMenu userMenu={props.config.userMenu} />
			) : (
				<Navbar
					ariaLabel={props.config.ariaLabel}
					fixed={!props.config.isLoggedIn}
					handleDrawerToggleClick={handleDrawerToggleClick}
					isLoggedIn={props.config.isLoggedIn}
					menuButtonName={props.config.menuButtonName}
					navbarPluginOutput={props.config.navbarPluginOutput}
					pageHeadingMenu={props.config.pageHeadingMenu}
					siteName={props.config.siteName}
					size={navState}
					userMenu={props.config.userMenu}
				/>
			)}
		</div>
	);
};

export default NavbarContainer;
