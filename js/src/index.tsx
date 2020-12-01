import Loading from './shared/Loading';
import Navbar from './navbar';
import React from 'react';
import { render } from 'react-dom';

const Admin = React.lazy(() => import('./gridSettings'));
const Display = React.lazy(() => import('./gridDisplay'));

const App: React.FC = (): JSX.Element => {
	const { pathname } = window.location;
	return (
		<>
			<Navbar />
			<React.Suspense fallback={<Loading />}>
				{pathname.includes('/admin/settings.php') ? <Admin /> : <Display />}
			</React.Suspense>
		</>
	);
};

const init = () => {
	document.removeEventListener('load', init);
	render(<App />, document.getElementById('academyNavbar'));
};
window.addEventListener('load', init);
