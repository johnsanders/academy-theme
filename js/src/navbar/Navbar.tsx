declare const M: MoodleJs;
declare const navbarConfig: NavbarConfig;
import './style.css';
import { MoodleJs, NavbarConfig } from '../types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	fixed?: boolean;
	forceUserMenu?: boolean;
	isIn: boolean;
	size: string;
}

const Navbar: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<nav
			aria-label={navbarConfig.ariaLabel}
			className={`
			navbar
			${props.fixed ? 'fixed-top' : ''}
			navbar-${props.size}
			navbar-expand
			${props.isIn ? '' : 'navbar-out'}
			moodle-has-zindex
		`}
		>
			<div
				className={`
				${props.size === 'large' ? 'mr-3' : ''}
				${navbarConfig.isLoggedIn ? 'd-inline-block' : 'd-none'}
			`}
				data-region="drawer-toggle"
			>
				<button
					aria-controls="nav-drawer"
					aria-expanded={navbarConfig.navDrawerOpen}
					className="btn nav-link float-sm-left btn-dark bg-transparent"
					data-action="toggle-drawer"
					data-preference="drawer-open-nav"
					data-side="left"
					type="button"
				>
					<Icon icon={faBars} />
					<span className="sr-only">{navbarConfig.menuButtonName}</span>
				</button>
			</div>
			<a className="navbar-brand aabtn has-logo" href={M.cfg.wwwroot}>
				<span className="logo fullsize d-none d-sm-inline">
					<img
						alt={navbarConfig.siteName}
						src={M.cfg.wwwroot + '/theme/academy/images/logo_light.png'}
					/>
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
		{props.forceUserMenu && !props.isIn ? (
			<div
				className="forcedUserMenu"
				dangerouslySetInnerHTML={{ __html: navbarConfig.userMenu }}
				style={{ position: 'fixed', right: '1em', zIndex: 900 }}
			/>
		) : null}
	</>
);

export default Navbar;
