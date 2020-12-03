import Loading from './shared/Loading';
import NavDrawer from './navDrawer';
import Navbar from './navbar';
import React from 'react';
import { render } from 'react-dom';

const GridAdmin = React.lazy(() => import('./gridSettings'));
const GridDisplay = React.lazy(() => import('./gridDisplay'));

const App: React.FC = (): JSX.Element => {
	const { search } = window.location;
	return (
		<>
			<Navbar />
			<NavDrawer />
			<React.Suspense fallback={<Loading />}>
				{search.includes('section=themesettingacademy') ? <GridAdmin /> : <GridDisplay />}
			</React.Suspense>
		</>
	);
};

const init = () => {
	document.removeEventListener('load', init);
	render(<App />, document.getElementById('academyNavbar'));
};
window.addEventListener('load', init);
