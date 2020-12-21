declare const M: MoodleJs;
declare const cnnAcademy: MoodleAcademy;
import './style.css';
import { MoodleAcademy, MoodleJs } from '../types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import logoLight from '../img/logo_light.png';

const { navbarConfig } = cnnAcademy;

interface Props {
	fixed?: boolean;
	handleDrawerToggleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	size: string;
}

const Navbar: React.FC<Props> = (props: Props): JSX.Element => (
	<nav
		aria-label={navbarConfig.ariaLabel}
		className={`
			navbar
			fixed-top
			navbar-${props.size}
			navbar-expand
			moodle-has-zindex
		`}
	>
		{!navbarConfig.showNavToggle ? null : (
			<div
				className={`
						${props.size === 'large' ? 'mr-3' : ''}
						${navbarConfig.isLoggedIn ? 'd-inline-block' : 'd-none'}
					`}
				data-region="drawer-toggle"
			>
				<button
					aria-controls="nav-drawer"
					aria-expanded="false"
					className="btn nav-link float-sm-left btn-dark bg-transparent"
					data-action="toggle-drawer"
					data-preference="drawer-open-nav"
					data-side="left"
					onClick={props.handleDrawerToggleClick}
					type="button"
				>
					<Icon icon={faBars} />
					<span className="sr-only">{navbarConfig.menuButtonName}</span>
				</button>
			</div>
		)}
		<a className="navbar-brand aabtn has-logo" href={M.cfg.wwwroot}>
			<span className="logo fullsize d-none d-sm-inline">
				<img alt={navbarConfig.siteName} src={logoLight} />
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

export default Navbar;
