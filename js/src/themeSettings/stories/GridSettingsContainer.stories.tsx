import '../../shared/style.css';
import '../style.css';
import React from 'react';
import ThemeSettingsContainer from '../ThemeSettingsContainer';
import injectConfig from './injectConfig';

const { settingsInputId, ...inputValue } = injectConfig;

declare global {
	interface Window {
		cnnAcademy: any;
	}
}

export default {
	title: 'themeSettings/GridSettingsContainer',
};

export const initialState = (): JSX.Element => {
	window.cnnAcademy = injectConfig;
	if (!document.getElementById(settingsInputId)) {
		const inputEl = document.createElement('input');
		inputEl.id = settingsInputId;
		inputEl.setAttribute('value', JSON.stringify({ ...inputValue }));
		document.body.appendChild(inputEl);
	}
	return <ThemeSettingsContainer />;
};
