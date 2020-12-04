import Loading from './shared/Loading';
import NavDrawer from './navDrawer';
import Navbar from './navbar';
import React from 'react';
import { render } from 'react-dom';

const Settings = React.lazy(() => import('./themeSettings'));
const FrontPage = React.lazy(() => import('./frontPage'));

const App: React.FC = (): JSX.Element => {
	const { search } = window.location;
	return (
		<>
			<Navbar />
			<NavDrawer />
			<React.Suspense fallback={<Loading />}>
				{search.includes('section=themesettingacademy') ? <Settings /> : <FrontPage />}
			</React.Suspense>
		</>
	);
};

const init = () => {
	document.removeEventListener('load', init);
	render(<App />, document.getElementById('academyNavbar'));
};
window.addEventListener('load', init);
