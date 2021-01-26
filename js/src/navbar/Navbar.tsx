declare const M: MoodleJs;
declare const cnnAcademy: MoodleAcademyFront | MoodleAcademySettings;
import './style.css';
import { MoodleAcademyFront, MoodleAcademySettings, MoodleJs } from '../types';
import ErrorBoundary from '../shared/ErrorBoundary';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Link } from './NavbarContainer';
import React from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import logoLight from '../img/logo_light.png';

const { navbarConfig } = cnnAcademy;

interface Props {
	ariaLabel: string;
	extraLinks?: Link[];
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
	<ErrorBoundary errorMessage="Error rendering navbar">
		<nav
			aria-label={props.ariaLabel}
			className={`
			fixed-top
			moodle-has-zindex
			navbar
			navbar-dark
			navbar-expand
			navbar-${props.size}
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
				{!props.extraLinks ? null : (
					<ul className="nav navbar-nav justify-content-end">
						{props.extraLinks.map((link, i) => (
							<li className="nav-item" key={i}>
								<a className="nav-link text-light" href={link.url}>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="d-flex flex-wrap justify-content-end">
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
	</ErrorBoundary>
);

export default Navbar;
