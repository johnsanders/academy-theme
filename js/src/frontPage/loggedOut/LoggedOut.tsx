import './styles.css';
import Home from './home';
import HomeOld from './homeOld';
import LoggedOutNavbar from './LoggedOutNavbar';
import { MoodleAcademyFront } from '../../types';
import Navbar from '../../navbar';
import React from 'react';
import WhyCnn from './whyCnn';
import { parse } from 'qs';

interface Props {
	cnnAcademy: MoodleAcademyFront;
	handleComponentsReady: () => void;
	visible: boolean;
}

const LoggedOut: React.FC<Props> = (props: Props) => {
	const { page } = parse(window.location.search, { ignoreQueryPrefix: true });
	return (
		<>
			{page ? (
				<LoggedOutNavbar
					config={props.cnnAcademy.navbarConfig}
					templateType={props.cnnAcademy.templateType}
					visible={props.visible}
				/>
			) : (
				<Navbar
					config={props.cnnAcademy.navbarConfig}
					templateType={props.cnnAcademy.templateType}
					visible={props.visible}
				/>
			)}
			<div style={{ marginTop: '100px' }}>
				{!page ? (
					<HomeOld handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
				) : null}
				{page === 'homenew' ? (
					<Home handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
				) : null}
				{page === 'whycnn' ? (
					<WhyCnn handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
				) : null}
			</div>
		</>
	);
};
export default LoggedOut;
