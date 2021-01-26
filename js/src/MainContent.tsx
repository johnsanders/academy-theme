declare const cnnAcademy: MoodleAcademyFront | MoodleAcademySettings;
import { MoodleAcademyFront, MoodleAcademySettings } from './types';
import FooterContainer from './shared/FooterContainer';
import Navbar from './navbar';
import React from 'react';
import clearStaticLoader from './helpers/clearStaticLoader';
import prepTranslation from './helpers/prepTranslation';

const FrontPage = React.lazy(() => import('./frontPage'));
const Settings = React.lazy(() => import('./themeSettings'));

const MainContent: React.FC = (): JSX.Element => {
	const isAcademySettingsPage = window.location.search.includes('section=themesettingacademy');
	const isFrontPage = cnnAcademy.templateType.includes('front_page');
	const isLoggedIn = cnnAcademy.navbarConfig.isLoggedIn;
	const [loading, setLoading] = React.useState(true);
	const handleComponentsReady = () => {
		if (isLoggedIn) {
			prepTranslation().then(() => {
				setLoading(false);
				clearStaticLoader();
			});
		} else {
			clearStaticLoader();
			setLoading(false);
		}
	};
	React.useEffect(() => {
		if (!isFrontPage && !isAcademySettingsPage) {
			if (document.readyState === 'complete') handleComponentsReady();
			else document.addEventListener('ready', handleComponentsReady);
		}
	}, []);
	return (
		<>
			{isAcademySettingsPage || isFrontPage ? null : (
				<Navbar
					config={cnnAcademy.navbarConfig}
					templateType={cnnAcademy.templateType}
					visible={true}
				/>
			)}
			<React.Suspense fallback={<div />}>
				{isAcademySettingsPage ? (
					<Settings
						cnnAcademy={cnnAcademy as MoodleAcademySettings}
						handleComponentsReady={handleComponentsReady}
					/>
				) : null}
				{isFrontPage ? (
					<FrontPage
						cnnAcademy={cnnAcademy as MoodleAcademyFront}
						handleComponentsReady={handleComponentsReady}
						visible={!loading}
					/>
				) : null}
			</React.Suspense>
			<FooterContainer drawerOpen={false} visible={!loading} />
		</>
	);
};

export default MainContent;
