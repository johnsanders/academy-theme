import { Course, Instructor, Module, Row, RowItem, Tag } from '../../../types';
import EditItem from './EditItem';
import React from 'react';
import updateGlobalObject from '../../../helpers/updateGlobalObject';

export type UpdateDateArgs = {
	dateDisplayed?: number | null;
	dateEnd?: number | null;
	dateStart?: number | null;
};

interface Props {
	activeItem: RowItem;
	activeRow: Row;
	allInstructors: Instructor[];
	allTags: Tag[];
	cancelEdit: () => void;
	courses: Course[];
	handleSave: (updatedItem: RowItem) => void;
	thumbUrls: string[];
}

const EditItemContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [errorMessage, setErrorMessage] = React.useState('');
	const [newItem, setNewItem] = React.useState<RowItem>(props.activeItem);
	const updateDuration = (duration: string): void => setNewItem({ ...newItem, duration });
	const updateDate = (args: UpdateDateArgs): void => setNewItem({ ...newItem, ...args });
	const updateModule = (module: Module, manualUrl?: string) => {
		updateGlobalObject('modsInfo', { [module.id]: { name: module.name } });
		const manualName = module.modname === 'manual' ? module.name : '';
		setNewItem({
			...newItem,
			manualName,
			manualUrl: manualUrl || '',
			modId: module.id,
			modName: module.modname,
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
			thumbUrls={props.thumbUrls}
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
