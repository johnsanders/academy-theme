import Navbar from './Navbar';
import React from 'react';

const largeThreshold = 50;
const NavbarContainer: React.FC = (): JSX.Element => {
	const inOutRef = React.useRef('out');
	const navRefSmall = React.useRef(
		document.querySelector('nav.navbar.navbar-small') as HTMLDivElement,
	);
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLDivElement);
	const [isLarge, setIsLarge] = React.useState(true);
	React.useEffect(() => {
		if (window.scrollY > largeThreshold) {
			navRefSmall.current.classList.remove('navbar-out');
			inOutRef.current = 'in';
		}
		const onScroll = () => {
			if (inOutRef.current === 'in' && window.scrollY < largeThreshold) {
				inOutRef.current = 'out';
				drawerRef.current.classList.add('lower');
				setIsLarge(true);
			} else if (inOutRef.current === 'out' && window.scrollY > largeThreshold) {
				inOutRef.current = 'in';
				setIsLarge(false);
				drawerRef.current.classList.remove('lower');
			}
		};
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<>
			<Navbar isIn={isLarge} size="large" />
			<Navbar fixed={true} isIn={!isLarge} size="small" />
		</>
	);
};

export default NavbarContainer;
