import ModalContainer from './ModalContainer';
import { MoodleAcademySettings } from '../types';
import React from 'react';
import createBlankItemSettings from './createBlankItemSettings';
import { createPortal } from 'react-dom';
import initDomAndParseJson from './initDomAndParseJson';
import updateFormInput from './updateFormInput';

interface Props {
	cnnAcademy: MoodleAcademySettings;
	handleComponentsReady: () => void;
}

const ModEdit: React.FC<Props> = (props: Props): JSX.Element | null => {
	props.handleComponentsReady();
	const formRef = React.useRef<HTMLFormElement | null>();
	const [modalOpen, setModalOpen] = React.useState(false);
	const [item, setItem] = React.useState(createBlankItemSettings);
	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setModalOpen(!modalOpen);
	};
	React.useEffect(() => {
		formRef.current = document.querySelector('form');
		const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!formRef.current) return;
			updateFormInput(formRef.current, item);
			e.currentTarget.submit();
		};
		if (formRef.current) {
			formRef.current.onsubmit = (e: Event) => e.preventDefault();
			formRef.current.addEventListener('submit', handleSubmit as any);
			return () => {
				if (formRef.current) formRef.current.removeEventListener('submit', handleSubmit as any);
			};
		}
	}, [item]);
	React.useEffect(() => {
		if (!formRef.current) return;
		const existingItemSettings = initDomAndParseJson(formRef.current);
		if (existingItemSettings) setItem(existingItemSettings);
	}, []);
	const el = document.getElementById('modEdit');
	if (!el) return null;
	return createPortal(
		<>
			<div className="form-group row fitem">
				<div className="col-12">
					<button className="btn btn-secondary" onClick={handleButtonClick}>
						Front Page Settings
					</button>
				</div>
			</div>
			<ModalContainer
				allInstructors={props.cnnAcademy.instructors}
				isOpen={modalOpen}
				item={item}
				setEditOpen={setModalOpen}
				setItem={setItem}
				thumbUrls={props.cnnAcademy.thumbUrls}
			/>
		</>,
		el,
	);
};

export default ModEdit;
