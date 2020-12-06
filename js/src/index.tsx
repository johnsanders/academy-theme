import MainContent from './MainContent';

import React from 'react';
import { render } from 'react-dom';

const init = () => {
	document.removeEventListener('load', init);
	render(<MainContent />, document.getElementById('academyNavbar'));
};

window.addEventListener('load', init);
