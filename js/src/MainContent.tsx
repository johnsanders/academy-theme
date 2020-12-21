declare const cnnAcademy: MoodleAcademy;
import Footer from './shared/Footer';
import FrontPage from './frontPage';
import Loading from './shared/Loading';
import { MoodleAcademy } from './types';
import Navbar from './navbar';
import React from 'react';
import clearStaticLoader from './helpers/clearStaticLoader';

const Settings = React.lazy(() => import('./themeSettings'));

const MainContent: React.FC = (): JSX.Element => {
	const isAcademySettingsPage = window.location.search.includes('section=themesettingacademy');
	const [loading, setLoading] = React.useState(cnnAcademy.templateType.includes('front_page'));
	React.useEffect(() => {
		if (!loading) clearStaticLoader();
	}, [loading]);
	return (
		<>
			<Navbar visible={!loading} />
			<React.Suspense fallback={<Loading />}>
				{isAcademySettingsPage ? (
					<Settings />
				) : (
					<FrontPage setLoading={setLoading} visible={!loading} />
				)}
			</React.Suspense>
			<Footer drawerOpen={false} visible={!loading} />
		</>
	);
};

export default MainContent;
