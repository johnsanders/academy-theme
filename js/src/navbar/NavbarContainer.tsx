declare const navbarConfig: NavbarConfig;
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { NavbarConfig } from '../types';
import React from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

const largeThreshold = 50;
const NavbarContainer: React.FC = (): JSX.Element => {
	const inOutRef = React.useRef('out');
	const navRefSmall = React.useRef(
		document.querySelector('nav.navbar.navbar-small') as HTMLDivElement,
	);
	const drawerRef = React.useRef(document.querySelector('#nav-drawer') as HTMLDivElement);
	React.useEffect(() => {
		if (window.scrollY > largeThreshold) {
			navRefSmall.current.classList.remove('navbar-out');
			inOutRef.current = 'in';
		}
		const onScroll = () => {
			if (inOutRef.current === 'in' && window.scrollY < largeThreshold) {
				inOutRef.current = 'out';
				navRefSmall.current.classList.add('navbar-out');
				drawerRef.current.classList.add('lower');
			} else if (inOutRef.current === 'out' && window.scrollY > largeThreshold) {
				inOutRef.current = 'in';
				navRefSmall.current.classList.remove('navbar-out');
				drawerRef.current.classList.remove('lower');
			}
		};
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<nav
			aria-label={navbarConfig.ariaLabel}
			className="navbar navbar-light navbar-large bg-white navbar-expand moodle-has-zindex"
		>
			<div
				className={`mr-3 ${navbarConfig.isLoggedIn ? 'd-inline-block' : 'd-none'}`}
				data-region="drawer-toggle"
			>
				<button
					aria-controls="nav-drawer"
					aria-expanded={navbarConfig.navDrawerOpen}
					className="btn nav-link float-sm-left mr-1 btn-light bg-gray"
					data-action="toggle-drawer"
					data-preference="drawer-open-nav"
					data-side="left"
					type="button"
				>
					<Icon icon={faBars} />
					<span className="sr-only">{navbarConfig.menuButtonName}</span>
				</button>
			</div>
			<a className="navbar-brand aabtn has-logo" href="{{{ config.wwwroot }}}">
				<span className="logo fullsize d-none d-sm-inline">
					<img alt={navbarConfig.siteName} src={navbarConfig.logoUrl} />
				</span>
			</a>
			<ul
				className="navbar-nav d-none d-md-flex"
				dangerouslySetInnerHTML={{
					__html: navbarConfig.customMenu + (navbarConfig.pageHeadingMenu || ''),
				}}
			/>
			<ul className="nav navbar-nav ml-auto">
				<li
					className="nav-item"
					dangerouslySetInnerHTML={{ __html: navbarConfig.navbarPluginOutput }}
				/>
				<li
					className="nav-item d-flex align-items-center"
					dangerouslySetInnerHTML={{ __html: navbarConfig.userMenu }}
				/>
			</ul>
		</nav>
	);
};

export default NavbarContainer;
