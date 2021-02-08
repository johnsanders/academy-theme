import './styles.css';
import LoggedOutNavbar from './LoggedOutNavbar';
import { MoodleAcademyFront } from '../../types';
import Navbar from '../../navbar';
import React from 'react';
import WhyCnn from './whyCnn';
import { parse } from 'qs';

const AbuDhabi = React.lazy(() => import('./abuDhabi'));
const AbuDhabiArabic = React.lazy(() => import('./abuDhabiArabic'));
const Home = React.lazy(() => import('./home'));
const HomeOld = React.lazy(() => import('./homeOld'));

interface Props {
	cnnAcademy: MoodleAcademyFront;
	handleComponentsReady: () => void;
	visible: boolean;
}

const LoggedOut: React.FC<Props> = (props: Props) => {
	const { page } = parse(window.location.search, { ignoreQueryPrefix: true });
	return (
		<>
			{!page ? (
				<>
					<Navbar
						config={props.cnnAcademy.navbarConfig}
						templateType={props.cnnAcademy.templateType}
						visible={props.visible}
					/>
					<HomeOld handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
				</>
			) : null}
			{page === 'homenew' ? (
				<>
					<LoggedOutNavbar
						config={props.cnnAcademy.navbarConfig}
						templateType={props.cnnAcademy.templateType}
						visible={props.visible}
					/>
					<div style={{ marginTop: '100px' }}>
						<Home handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
					</div>
				</>
			) : null}
			{page === 'whycnn' ? (
				<>
					<LoggedOutNavbar
						config={props.cnnAcademy.navbarConfig}
						templateType={props.cnnAcademy.templateType}
						visible={props.visible}
					/>
					<div style={{ marginTop: '100px' }}>
						<WhyCnn handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
					</div>
				</>
			) : null}
			{page === 'abudhabi' ? (
				<>
					<LoggedOutNavbar
						config={props.cnnAcademy.navbarConfig}
						forceSize="small"
						templateType={props.cnnAcademy.templateType}
						visible={props.visible}
					/>
					<AbuDhabi handleComponentsReady={props.handleComponentsReady} visible={props.visible} />
				</>
			) : null}
			{page === 'abudhabiarabic' ? (
				<>
					<LoggedOutNavbar
						config={props.cnnAcademy.navbarConfig}
						forceSize="small"
						templateType={props.cnnAcademy.templateType}
						visible={props.visible}
					/>
					<AbuDhabiArabic
						handleComponentsReady={props.handleComponentsReady}
						visible={props.visible}
					/>
				</>
			) : null}
		</>
	);
};
export default LoggedOut;
