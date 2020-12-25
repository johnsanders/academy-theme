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
	ariaLabel: string;
	fixed?: boolean;
	handleDrawerToggleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isLoggedIn: boolean;
	menuButtonName: string;
	navbarPluginOutput: string;
	pageHeadingMenu: string;
	siteName: string;
	size: string;
	userMenu: string;
}

const Navbar: React.FC<Props> = (props: Props): JSX.Element => (
	<nav
		aria-label={props.ariaLabel}
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
						${props.isLoggedIn ? 'd-inline-block' : 'd-none'}
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
					<span className="sr-only">{props.menuButtonName}</span>
				</button>
			</div>
		)}
		<a className="navbar-brand aabtn has-logo" href={M.cfg.wwwroot}>
			<span className="logo fullsize d-sm-inline">
				<img alt={props.siteName} src={logoLight} />
			</span>
		</a>
		<div className="ml-auto d-flex flex-wrap justify-content-end">
			<ul className="nav navbar-nav justify-content-end">
				<li className="nav-item" dangerouslySetInnerHTML={{ __html: props.navbarPluginOutput }} />
				<li className="nav-item">
					{!props.isLoggedIn ? null : (
						<ul
							className="navbar-nav"
							dangerouslySetInnerHTML={{
								__html: navbarConfig.customMenu + (props.pageHeadingMenu || ''),
							}}
						/>
					)}
				</li>
				<li
					className="nav-item nav-link d-flex align-items-center ml-2"
					dangerouslySetInnerHTML={{ __html: props.userMenu }}
				/>
			</ul>
		</div>
	</nav>
);

export default Navbar;
