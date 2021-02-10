import { Instructor, RowItem } from '../types';
import Modal from './Modal';
import React from 'react';

export type UpdateDateArgs = {
	dateDisplayed?: number | null;
	dateEnd?: number | null;
	dateStart?: number | null;
};

interface Props {
	allInstructors: Instructor[];
	isOpen: boolean;
	item: RowItem;
	setEditOpen: (isOpen: boolean) => void;
	setItem: (item: RowItem) => void;
	thumbUrls: string[];
}

const ModalContainer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const updateDate = (args: UpdateDateArgs): void => props.setItem({ ...props.item, ...args });
	const updateDuration = (duration: string) => props.setItem({ ...props.item, duration });
	const updateInstructors = (instructors: string[]): void =>
		props.setItem({ ...props.item, instructors });
	const updateThumb = (thumbUrl: string): void => props.setItem({ ...props.item, thumbUrl });
	const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.setEditOpen(false);
	};
	const { isOpen } = props;
	React.useEffect(() => {
		if (isOpen) document.body.classList.add('modal-open');
		else document.body.classList.remove('modal-open');
	}, [isOpen]);
	return (
		<Modal
			allInstructors={props.allInstructors}
			handleCloseClick={handleCloseClick}
			isOpen={props.isOpen}
			item={props.item}
			thumbUrls={props.thumbUrls}
			updateDate={updateDate}
			updateDuration={updateDuration}
			updateInstructors={updateInstructors}
			updateThumb={updateThumb}
		/>
	);
};

export default ModalContainer;
