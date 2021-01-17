import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import MainContent from './MainContent';

if (window.location.hostname !== 'localhost')
	Sentry.init({
		autoSessionTracking: true,
		dsn: 'https://a1bf2a0bb3cf4d7ab7bb5d39df46c193@o502362.ingest.sentry.io/5584755',
		integrations: [new Integrations.BrowserTracing()],
		tracesSampleRate: 0.5,
	});

import React from 'react';
import { render } from 'react-dom';

const init = () => {
	document.removeEventListener('load', init);
	render(<MainContent />, document.getElementById('academyNavbar'));
};

window.addEventListener('load', init);
