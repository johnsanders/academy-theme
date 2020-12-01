import React from 'react';
import { debounce } from 'lodash';

const largeThreshold = 50;

const NavbarContainer: React.FC = (): JSX.Element => {
	const navClassRef = React.useRef('');
	const navRef = React.useRef(document.querySelector('nav.navbar') as HTMLDivElement);
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLDivElement);
	React.useEffect(() => {
		if (window.scrollY < largeThreshold) {
			navRef.current.classList.add('large');
			drawerRef.current.classList.add('lower');
			navClassRef.current = 'large';
		}
		const onScroll = debounce(() => {
			if (navClassRef.current === 'large' && window.scrollY > largeThreshold) {
				navClassRef.current = '';
				navRef.current.classList.remove('large');
				drawerRef.current.classList.remove('lower');
			} else if (navClassRef.current === '' && window.scrollY < largeThreshold) {
				navClassRef.current = 'large';
				navRef.current.classList.add('large');
				drawerRef.current.classList.add('lower');
			}
		}, 100);
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<div
			style={{
				backgroundColor: 'lightgray',
				left: 0,
				position: 'absolute',
				top: '200px',
				zIndex: 20000,
			}}
		>
			woot
		</div>
	);
};

export default NavbarContainer;
