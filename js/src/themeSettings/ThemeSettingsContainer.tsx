declare const cnnAcademy: MoodleAcademy;
import './style.css';
import '../shared/style.css';
import { CarouselItem, Config, Instructor, MoodleAcademy, Row } from '../types';
import React from 'react';
import { Tag } from '../types';
import ThemeSettings from './ThemeSettings';
import clearStaticLoader from '../helpers/clearStaticLoader';
import { createPortal } from 'react-dom';
import modifyDom from '../helpers/modifyDom';
import qs from 'qs';
import updateUrlQuery from '../helpers/updateUrlQuery';

const initialConfig: Config = {
	carousel: cnnAcademy.carouselItems || [],
	instructors: cnnAcademy.instructors || [],
	rows: cnnAcademy.rows || [],
	tags: cnnAcademy.tags || [],
};

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
		const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
		const activeTab = query.tab || 'grid';
		setActiveTab(activeTab as string);
		queryRef.current.tab = activeTab;
		updateUrlQuery(queryRef.current);
		window.onbeforeunload = null;
		clearStaticLoader();
	}, []);
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		const id = e.currentTarget.dataset.id;
		queryRef.current.tab = id;
		updateUrlQuery(queryRef.current);
		if (id) setActiveTab(id.toLowerCase());
	};
	const setCarousel = (carousel: CarouselItem[]): void => setConfig({ ...config, carousel });
	const setInstructors = (instructors: Instructor[]): void => setConfig({ ...config, instructors });
	const setRows = (rows: Row[]): void => setConfig({ ...config, rows });
	const setTags = (tags: Tag[]): void => setConfig({ ...config, tags });
	const submitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (e.currentTarget.classList.contains('disabled')) return;
		window.onbeforeunload = null;
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
