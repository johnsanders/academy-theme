declare const cnnAcademy: MoodleAcademy;
import Footer from './shared/Footer';
import { MoodleAcademy } from './types';
import Navbar from './navbar';
import React from 'react';
import clearStaticLoader from './helpers/clearStaticLoader';

const FrontPage = React.lazy(() => import('./frontPage'));
const Settings = React.lazy(() => import('./themeSettings'));

const MainContent: React.FC = (): JSX.Element => {
	const isAcademySettingsPage = window.location.search.includes('section=themesettingacademy');
	const isFrontPage = cnnAcademy.templateType.includes('front_page');
	const [loading, setLoading] = React.useState(isFrontPage);
	React.useEffect(() => {
		if (!loading) clearStaticLoader();
	}, [loading]);
	return (
		<>
			<Navbar visible={!loading} />
			<React.Suspense fallback={<div />}>
				{isAcademySettingsPage ? <Settings /> : null}
				{isFrontPage ? <FrontPage setLoading={setLoading} visible={!loading} /> : null}
			</React.Suspense>
			<Footer drawerOpen={false} visible={!loading} />
		</>
	);
};

export default MainContent;
