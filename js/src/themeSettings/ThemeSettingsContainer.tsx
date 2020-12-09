declare const cnnAcademy: MoodleAcademy;
import './style.css';
import '../shared/style.css';
import { CarouselItem, Config, Instructor, MoodleAcademy, Row } from '../types';
import React from 'react';
import { Tag } from '../types';
import ThemeSettings from './ThemeSettings';
import { createPortal } from 'react-dom';
import modifyDom from '../helpers/modifyDom';
import qs from 'qs';
import updateUrl from '../helpers/updateUrl';

const initialConfig: Config = { carousel: [], instructors: [], rows: [], tags: [] };

const ThemeSettingsContainer: React.FC = (): JSX.Element | null => {
	const inputRef = React.useRef(
		document.getElementById(cnnAcademy.settingsInputId) as HTMLInputElement,
	);
	const queryRef = React.useRef<{ [key: string]: unknown }>(
		qs.parse(window.location.search, { ignoreQueryPrefix: true }),
	);
	const formRef = React.useRef(document.getElementById('adminsettings') as HTMLFormElement);
	const [config, setConfigState] = React.useState<Config>(initialConfig);
	const [activeTab, setActiveTab] = React.useState('grid');
	const [unsavedChanges, setUnsavedChanges] = React.useState(false);
	const setConfig = (newConfig: Config) => {
		const flashClose = document.querySelector<HTMLButtonElement>('.alert-block button.close');
		if (flashClose) flashClose.click();
		if (!unsavedChanges) {
			setUnsavedChanges(true);
			window.onbeforeunload = () => true;
		}
		setConfigState(newConfig);
		inputRef.current.value = JSON.stringify(newConfig);
	};
	React.useEffect(() => {
		modifyDom();
		try {
			setConfig(JSON.parse(inputRef.current.value));
			setUnsavedChanges(false);
		} catch {
			console.log('Settings config is not valid JSON. Using blank config.');
			inputRef.current.value = JSON.stringify(initialConfig);
		}
		const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
		const activeTab = query.tab || 'grid';
		setActiveTab(activeTab as string);
		queryRef.current.tab = activeTab;
		updateUrl(queryRef.current);
	}, []);
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		const id = e.currentTarget.dataset.id;
		queryRef.current.tab = id;
		updateUrl(queryRef.current);
		if (id) setActiveTab(id.toLowerCase());
	};
	const setCarousel = (carousel: CarouselItem[]): void => setConfig({ ...config, carousel });
	const setInstructors = (instructors: Instructor[]): void => setConfig({ ...config, instructors });
	const setRows = (rows: Row[]): void => setConfig({ ...config, rows });
	const setTags = (tags: Tag[]): void => setConfig({ ...config, tags });
	const submitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (formRef.current) formRef.current.submit();
	};

	const el = document.getElementById('academyContent');

	if (!el) {
		console.log('Could not find academyContent element');
		return null;
	}
	return createPortal(
		<ThemeSettings
			activeTab={activeTab}
			config={config}
			handleNavClick={handleNavClick}
			inputRef={inputRef}
			setCarousel={setCarousel}
			setInstructors={setInstructors}
			setRows={setRows}
			setTags={setTags}
			submitForm={submitForm}
			unsavedChanges={unsavedChanges}
		/>,
		el,
	);
};

export default ThemeSettingsContainer;
