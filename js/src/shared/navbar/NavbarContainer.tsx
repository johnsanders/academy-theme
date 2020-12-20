declare const cnnAcademy: MoodleAcademy;
import { MoodleAcademy } from '../../types';
import Navbar from './Navbar';
import React from 'react';
import SimpleMenu from './SimpleMenu';

const { navbarConfig } = cnnAcademy;
const largeThreshold = navbarConfig.isLoggedIn ? 50 : 400;

interface Props {
	visible: boolean;
}

const NavbarContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLElement);
	const [navState, setNavState] = React.useState(navbarConfig.isLoggedIn ? 'large' : 'none');
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
		if (navbarConfig.isLoggedIn) {
			if (navState === 'small' && window.scrollY < largeThreshold) setLarge();
			else if (navState === 'large' && window.scrollY > largeThreshold) setSmall();
		} else {
			if (navState === 'large' && window.scrollY < largeThreshold) setNone();
			else if (navState === 'none' && window.scrollY > largeThreshold) setLarge();
		}
	};
	React.useEffect(() => {
		onScroll();
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, [onScroll]);
	return (
		<div className={`fadeIn ${props.visible ? '' : 'd-none'}`}>
			{navState === 'none' ? (
				<SimpleMenu userMenu={cnnAcademy.navbarConfig.userMenu} />
			) : (
				<Navbar
					fixed={!navbarConfig.isLoggedIn}
					handleDrawerToggleClick={handleDrawerToggleClick}
					size={navState}
				/>
			)}
		</div>
	);
};

export default NavbarContainer;
