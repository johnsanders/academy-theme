import * as helpers from './helpers';
import { MoodleAcademySettings, RowItem } from '../types';
import ModalContainer from './ModalContainer';
import React from 'react';
import createBlankItemSettings from './createBlankItemSettings';
import { createPortal } from 'react-dom';

interface Props {
	cnnAcademy: MoodleAcademySettings;
	handleComponentsReady: () => void;
}

const ModEdit: React.FC<Props> = (props: Props): JSX.Element | null => {
	props.handleComponentsReady();
	const formRef = React.useRef<HTMLFormElement | null>();
	const existingItemsRef = React.useRef<RowItem[]>();
	const [modalOpen, setModalOpen] = React.useState(false);
	const [item, setItem] = React.useState(createBlankItemSettings);
	const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setModalOpen(true);
	};
	const handleCancel = () => setModalOpen(!modalOpen);
	const handleSave = () => {
		setModalOpen(!modalOpen);
		if (!existingItemsRef.current) return;
		helpers.saveSettings(item, existingItemsRef.current);
	};
	React.useEffect(() => {
		formRef.current = document.querySelector('form');
		if (!formRef.current) return;
		helpers.initDom();
		const getExistingItems = async () => {
			const existingSettings = await helpers.getExistingSettings();
			if (existingSettings) {
				const { existingItem, existingItems } = existingSettings;
				existingItemsRef.current = existingItems;
				if (existingItem) setItem(existingItem);
			}
		};
		getExistingItems();
	}, []);
	const el = document.getElementById('modEdit');
	if (!el) return null;
	return createPortal(
		<>
			<div className="form-group row fitem">
				<div className="col-12">
					<button className="btn btn-secondary" onClick={handleOpenModal}>
						Front Page Settings
					</button>
				</div>
			</div>
			<ModalContainer
				allInstructors={props.cnnAcademy.instructors}
				handleCancel={handleCancel}
				handleSave={handleSave}
				isOpen={modalOpen}
				item={item}
				setItem={setItem}
				thumbUrls={props.cnnAcademy.thumbUrls}
			/>
		</>,
		el,
	);
};

export default ModEdit;
