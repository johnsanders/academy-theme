import Footer from './shared/Footer';
import Loading from './shared/Loading';
import Navbar from './navbar';
import React from 'react';
import clearLoader from './helpers/clearLoader';

const Settings = React.lazy(() => import('./themeSettings'));
const FrontPage = React.lazy(() => import('./frontPage'));

const MainContent: React.FC = (): JSX.Element => {
	const isSettingsPage = window.location.search.includes('section=themesettingacademy');
	const [loading, setLoading] = React.useState(!isSettingsPage);
	React.useEffect(clearLoader, []);
	return (
		<>
			<Navbar />
			{loading ? <Loading /> : null}
			<React.Suspense fallback={<Loading />}>
				{isSettingsPage ? <Settings /> : <FrontPage loading={loading} setLoading={setLoading} />}
			</React.Suspense>
			<Footer drawerOpen={false} loading={loading} />
		</>
	);
};

export default MainContent;
