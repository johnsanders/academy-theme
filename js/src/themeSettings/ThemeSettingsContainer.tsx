import './style.css';
import '../shared/style.css';
import { CarouselItem, Config, Instructor, MoodleAcademySettings, Row } from '../types';
import Navbar from '../navbar';
import React from 'react';
import { Tag } from '../types';
import ThemeSettings from './ThemeSettings';
import clearStaticLoader from '../helpers/clearStaticLoader';
import { createPortal } from 'react-dom';
import modifySettingsDom from '../helpers/modifySettingsDom';
import qs from 'qs';
import updateUrlQuery from '../helpers/updateUrlQuery';

interface Props {
	cnnAcademy: MoodleAcademySettings;
	handleComponentsReady: () => void;
}

const ThemeSettingsContainer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const inputRef = React.useRef(
		document.getElementById(props.cnnAcademy.settingsInputId) as HTMLInputElement,
	);
	const queryRef = React.useRef<{ [key: string]: unknown }>(
		qs.parse(window.location.search, { ignoreQueryPrefix: true }),
	);
	const formRef = React.useRef(document.getElementById('adminsettings') as HTMLFormElement);
	const [carousel, setCarousel] = React.useState<CarouselItem[]>(
		props.cnnAcademy.carouselItems || [],
	);
	const [instructors, setInstructors] = React.useState<Instructor[]>(
		props.cnnAcademy.instructors || [],
	);
	const [rows, setRows] = React.useState<Row[]>(props.cnnAcademy.rows || []);
	const [tags, setTags] = React.useState<Tag[]>(props.cnnAcademy.tags || []);
	const [activeTab, setActiveTab] = React.useState('grid');
	const [unsavedChanges, setUnsavedChanges] = React.useState<boolean>();
	React.useEffect(() => {
		modifySettingsDom();
		const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
		const activeTab = query.tab || 'grid';
		setActiveTab(activeTab as string);
		queryRef.current.tab = activeTab;
		updateUrlQuery(queryRef.current);
		window.onbeforeunload = null;
		clearStaticLoader();
		props.handleComponentsReady();
	}, []);
	React.useEffect(() => {
		if (unsavedChanges === undefined) {
			setUnsavedChanges(false);
			return;
		}
		const flashClose = document.querySelector<HTMLButtonElement>('.alert-block button.close');
		if (flashClose) flashClose.click();
		if (!unsavedChanges) {
			setUnsavedChanges(true);
			window.onbeforeunload = () => true;
		}
		const newConfig: Config = { carousel, instructors, rows, tags };
		inputRef.current.value = JSON.stringify(newConfig);
	}, [carousel, instructors, rows, tags]);
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		const id = e.currentTarget.dataset.id;
		queryRef.current.tab = id;
		updateUrlQuery(queryRef.current);
		if (id) setActiveTab(id.toLowerCase());
	};
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
		<>
			<Navbar
				config={props.cnnAcademy.navbarConfig}
				templateType={props.cnnAcademy.templateType}
				visible={true}
			/>
			<ThemeSettings
				activeTab={activeTab}
				carousel={carousel}
				carouselUrls={props.cnnAcademy.carouselUrls}
				courses={props.cnnAcademy.courses}
				handleNavClick={handleNavClick}
				inputRef={inputRef}
				instructors={instructors}
				modsInfo={props.cnnAcademy.modsInfo}
				rows={rows}
				setCarousel={setCarousel}
				setInstructors={setInstructors}
				setRows={setRows}
				setTags={setTags}
				submitForm={submitForm}
				tags={tags}
				thumbUrls={props.cnnAcademy.thumbUrls}
				unsavedChanges={unsavedChanges || false}
			/>
		</>,
		el,
	);
};

export default ThemeSettingsContainer;
