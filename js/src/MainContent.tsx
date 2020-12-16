import Footer from './shared/Footer';
import Loading from './shared/Loading';
import Navbar from './navbar';
import React from 'react';

const Settings = React.lazy(() => import('./themeSettings'));
const FrontPage = React.lazy(() => import('./frontPage'));

const MainContent: React.FC = (): JSX.Element => {
	const { search } = window.location;
	return (
		<>
			<Navbar />
			<React.Suspense fallback={<Loading />}>
				{search.includes('section=themesettingacademy') ? <Settings /> : <FrontPage />}
			</React.Suspense>
			<Footer drawerOpen={false} />
		</>
	);
};

export default MainContent;
