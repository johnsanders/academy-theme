import Footer from './shared/Footer';
import FrontPage from './frontPage';
import Loading from './shared/Loading';
import Navbar from './navbar';
import React from 'react';
import clearLoader from './helpers/clearLoader';

const Settings = React.lazy(() => import('./themeSettings'));

const MainContent: React.FC = (): JSX.Element => {
	const isSettingsPage = window.location.search.includes('section=themesettingacademy');
	const [loading, setLoading] = React.useState(!isSettingsPage);
	React.useEffect(() => {
		if (!loading) clearLoader();
	}, [loading]);
	return (
		<>
			<Navbar visible={!loading} />
			<React.Suspense fallback={<Loading />}>
				{isSettingsPage ? <Settings /> : <FrontPage setLoading={setLoading} visible={!loading} />}
			</React.Suspense>
			<Footer drawerOpen={false} visible={!loading} />
		</>
	);
};

export default MainContent;
