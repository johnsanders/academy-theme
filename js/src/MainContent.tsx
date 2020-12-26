declare const cnnAcademy: MoodleAcademy;
import ErrorBoundary from './shared/ErrorBoundary';
import FooterContainer from './shared/FooterContainer';
import { MoodleAcademy } from './types';
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
	const [loading, setLoading] = React.useState(isFrontPage);
	const handleReactError = () => setLoading(false);
	React.useEffect(() => {
		if (!loading && isLoggedIn) prepTranslation().then(clearStaticLoader);
		else if (!loading) clearStaticLoader();
	}, [loading]);
	return (
		<>
			<ErrorBoundary errorMessage="Error rendering navbar" handleError={handleReactError}>
				<Navbar visible={!loading} />
			</ErrorBoundary>
			<React.Suspense fallback={<div />}>
				{isAcademySettingsPage ? <Settings /> : null}
				{isFrontPage ? <FrontPage setLoading={setLoading} visible={!loading} /> : null}
			</React.Suspense>
			<FooterContainer drawerOpen={false} visible={!loading} />
		</>
	);
};

export default MainContent;
