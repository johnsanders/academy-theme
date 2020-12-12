import '../../shared/style.css';
import '../style.css';
import GridContainer from '../gridTab/GridContainer';
import React from 'react';
import { action } from '@storybook/addon-actions';
import injectConfig from './injectConfig';
declare global {
	interface Window {
		cnnAcademy: any;
	}
}

const actions = {
	setRows: action('setRows'),
};

export default {
	title: 'themeSettings/GridContainer',
};

export const initialState = (): JSX.Element => {
	window.cnnAcademy = injectConfig;
	return <GridContainer {...actions} config={injectConfig} />;
};
