import Loading from './shared/Loading';
import React from 'react';
import { render } from 'react-dom';

const Admin = React.lazy(() => import('./admin/AppContainer'));
const Display = React.lazy(() => import('./display/App'));

const App: React.FC = (): JSX.Element => {
	const { pathname } = window.location;
	return (
		<React.Suspense fallback={<Loading />}>
			{pathname.includes('/admin/settings.php') ? <Admin /> : <Display />}
		</React.Suspense>
	);
};

render(<App />, document.getElementById('academyGridApp'));
