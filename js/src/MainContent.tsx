import Footer from './shared/Footer';
import Loading from './shared/Loading';
import NavDrawer from './navDrawer';
import Navbar from './navbar';
import React from 'react';

const Settings = React.lazy(() => import('./themeSettings'));
const FrontPage = React.lazy(() => import('./frontPage'));

const MainContent: React.FC = (): JSX.Element => {
	const { search } = window.location;
	// const [drawerOpen, setDrawerOpen] = React.useState(false);
	const setDrawerOpen = () => null;
	React.useEffect(() => {
		const drawer = document.getElementById('nav-drawer');
		// setDrawerOpen(!drawer ? false : !drawer.classList.contains('closed'));
	}, []);
	return (
		<>
			<Navbar setDrawerOpen={setDrawerOpen} />
			<NavDrawer />
			<React.Suspense fallback={<Loading />}>
				{search.includes('section=themesettingacademy') ? <Settings /> : <FrontPage />}
			</React.Suspense>
			<Footer drawerOpen={false} />
		</>
	);
};

export default MainContent;
