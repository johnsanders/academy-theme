import { Instructor, RowItem } from '../types';
import ImagesModal from '../themeSettings/ImagesModal';
import React from 'react';
import SettingsModal from './Modal';

export type UpdateDateArgs = {
	dateDisplayed?: number | null;
	dateEnd?: number | null;
	dateStart?: number | null;
};

interface Props {
	allInstructors: Instructor[];
	handleCancel: () => void;
	handleSave: () => void;
	isOpen: boolean;
	item: RowItem;
	setItem: (item: RowItem) => void;
	thumbUrls: string[];
}

const ModalContainer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const [thumbsModalActive, setThumbsModalActive] = React.useState(false);
	const updateDate = (args: UpdateDateArgs): void => props.setItem({ ...props.item, ...args });
	const updateDuration = (duration: string) => props.setItem({ ...props.item, duration });
	const updateInstructors = (instructors: string[]): void =>
		props.setItem({ ...props.item, instructors });
	const updateThumb = (thumbUrl: string): void => props.setItem({ ...props.item, thumbUrl });
	const { isOpen } = props;
	React.useEffect(() => {
		if (isOpen) document.body.classList.add('modal-open');
		else document.body.classList.remove('modal-open');
	}, [isOpen]);
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.handleCancel();
	};
	const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.handleSave();
	};
	return thumbsModalActive ? (
		<div className="modal show">
			<ImagesModal
				handleImageClick={updateThumb}
				imageUrls={props.thumbUrls}
				setIsOpen={setThumbsModalActive}
			/>
		</div>
	) : (
		<SettingsModal
			allInstructors={props.allInstructors}
			handleCancel={handleCancel}
			handleSave={handleSave}
			isOpen={props.isOpen}
			item={props.item}
			setIsOpen={setThumbsModalActive}
			thumbUrls={props.thumbUrls}
			updateDate={updateDate}
			updateDuration={updateDuration}
			updateInstructors={updateInstructors}
			updateThumb={updateThumb}
		/>
	);
};

export default ModalContainer;
