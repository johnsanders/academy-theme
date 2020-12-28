import { Course, Instructor, Module, Row, RowItem, Tag } from '../../../types';
import EditItem from './EditItem';
import React from 'react';
import { createModuleUrl } from '../GridContainer';

interface Props {
	activeItem: RowItem;
	activeRow: Row;
	allInstructors: Instructor[];
	allTags: Tag[];
	cancelEdit: () => void;
	courses: Course[];
	handleSave: (updatedItem: RowItem) => void;
}

const EditItemContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [errorMessage, setErrorMessage] = React.useState('');
	const [newItem, setNewItem] = React.useState<RowItem>(props.activeItem);
	const updateDuration = (duration: string): void => setNewItem({ ...newItem, duration });
	const updateDate = (
		key: 'dateEnd' | 'dateStart' | 'dateDisplayed',
		value: number | null,
	): void => {
		setNewItem({ ...newItem, [key]: value });
	};
	const updateModule = (module: Module, manualUrl?: string) => {
		const url = manualUrl || createModuleUrl(module.id, module.modname);
		const manualName = module.modname === 'manual' ? module.name : '';
		setNewItem({
			...newItem,
			manualName,
			modId: module.id,
			modName: module.modname,
			url,
		});
	};
	const updateInstructors = (instructors: string[]): void =>
		setNewItem({ ...newItem, instructors });
	const updateTags = (tags: string[]) => setNewItem({ ...newItem, tags });
	const updateThumb = (thumbUrl: string): void => setNewItem({ ...newItem, thumbUrl });
	const cancelEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.cancelEdit();
	};
	const saveItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (
			!newItem.modId ||
			!newItem.thumbUrl ||
			(newItem.modName === 'manual' && !newItem.manualName)
		) {
			setErrorMessage('Module and thumbnail image are required.');
			return;
		}
		props.handleSave(newItem);
	};
	const clearErrorMessage = () => setErrorMessage('');
	return (
		<EditItem
			activeRow={props.activeRow}
			allInstructors={props.allInstructors}
			allTags={props.allTags}
			cancelEdit={cancelEdit}
			clearErrorMessage={clearErrorMessage}
			courses={props.courses}
			errorMessage={errorMessage}
			newItem={newItem}
			saveItem={saveItem}
			updateDate={updateDate}
			updateDuration={updateDuration}
			updateInstructors={updateInstructors}
			updateModule={updateModule}
			updateTags={updateTags}
			updateThumb={updateThumb}
		/>
	);
};

export default EditItemContainer;
