import { Instructor, Module, Row, RowItem, Tag } from '../../types';
import EditItem from './EditItem';
import React from 'react';
import { createModuleUrl } from '../gridTab/GridContainer';

interface Props {
	activeItem: RowItem;
	activeRow: Row;
	allInstructors: Instructor[];
	allTags: Tag[];
	cancelEdit: () => void;
	handleSave: (updatedItem: RowItem) => void;
}

const EditItemContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [errorMessage, setErrorMessage] = React.useState('');
	const [newItem, setNewItem] = React.useState<RowItem>(props.activeItem);
	const updateItemInfo = (instructors: string[], tags: string[], thumbUrl: string): void =>
		setNewItem({ ...newItem, instructors, tags, thumbUrl });
	const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const key = e.currentTarget.dataset.id;
		if (!key) throw new Error('Cannot get input id');
		setNewItem({ ...newItem, [key]: e.currentTarget.value });
	};
	const updateInstructors = (newInstructors: string[]): void =>
		updateItemInfo(newInstructors, newItem.tags, newItem.thumbUrl);
	const updateModule = (module: Module) => {
		const url = createModuleUrl(module.id, module.modname);
		setNewItem({
			...newItem,
			modId: module.id,
			modName: module.modname,
			name: module.name,
			url,
		});
	};
	const updateTags = (newTags: string[]) =>
		updateItemInfo(newItem.instructors, newTags, newItem.thumbUrl);
	const updateThumb = (thumbUrl: string): void =>
		updateItemInfo(newItem.instructors, newItem.tags, thumbUrl);
	const cancelEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.cancelEdit();
	};
	const saveItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (!newItem.name || !newItem.modId || !newItem.thumbUrl) {
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
			errorMessage={errorMessage}
			newItem={newItem}
			saveItem={saveItem}
			updateInput={updateInput}
			updateInstructors={updateInstructors}
			updateModule={updateModule}
			updateTags={updateTags}
			updateThumb={updateThumb}
		/>
	);
};

export default EditItemContainer;
