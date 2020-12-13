import { Instructor, Module, Row, RowItem, Tag } from '../../../types';
import EditItem from './EditItem';
import React from 'react';
import { createModuleUrl } from '../GridContainer';

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
	const updateDuration = (duration: string): void => setNewItem({ ...newItem, duration });
	const updateDate = (key: 'dateEnd' | 'dateStart', value: number | null): void =>
		setNewItem({ ...newItem, [key]: value });
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
	console.log(props.activeItem.dateStart);
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
