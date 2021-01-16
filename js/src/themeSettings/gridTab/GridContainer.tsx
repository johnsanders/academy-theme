import { Course, Instructor, MoodleAcademySettings, Row, RowItem, Tag } from '../../types';
import { createBlankGridItem, createBlankGridRow } from './edit/createBlankElement';
import Grid from './Grid';
import React from 'react';
import arrayMove from 'array-move';
import disableSaveButtons from '../disableSaveButtons';
import { v4 as uuid } from 'uuid';

interface Props {
	courses: Course[];
	instructors: Instructor[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: Row[];
	setRows: (rows: Row[]) => void;
	tags: Tag[];
	thumbUrls: string[];
}

const GridContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeItem, setActiveItem] = React.useState<RowItem | null>(null);
	const [activeRow, setActiveRow] = React.useState<Row | null>(null);
	const [activeCollectionRow, setActiveCollectionRow] = React.useState<Tag[] | null>(null);
	const cancelEdit = (e?: React.MouseEvent<HTMLButtonElement>): void => {
		if (e) e.preventDefault();
		setActiveItem(null);
		setActiveRow(null);
		disableSaveButtons(false);
	};
	const handleAddRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const newRow = createBlankGridRow();
		setActiveRow(newRow);
		disableSaveButtons(true);
	};
	const handleAddCollectionRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setActiveCollectionRow([]);
		disableSaveButtons(true);
	};
	const handleEditRowClick = (rowId: string): void => {
		const rowToEdit = props.rows.find((row) => row.id === rowId);
		if (rowToEdit) setActiveRow(rowToEdit);
		disableSaveButtons(true);
	};
	const handleSaveCollectionRow = (newRow: Tag[]): void => {
		console.log(newRow);
	};
	const handleSaveRow = (newRow: Row): void => {
		const existingRow = props.rows.find((row) => row.id === newRow.id);
		const newRows = existingRow
			? props.rows.map((row) => (row.id === newRow.id ? newRow : row))
			: [...props.rows, newRow];
		props.setRows(newRows);
		setActiveRow(null);
		disableSaveButtons(false);
	};
	const handleReorderItems = (rowId: string, from: number, to: number): void => {
		const row = props.rows.find((row) => row.id === rowId);
		if (!row) throw new Error('Cannot find row to reorder');
		const newItems = arrayMove(row.items, from, to);
		const newRow = { ...row, items: newItems };
		const newRows = props.rows.map((row) => (row.id === rowId ? newRow : row));
		props.setRows(newRows);
	};
	const handleReorderRows = (from: number, to: number): void => {
		const newRows = arrayMove(props.rows, from, to);
		props.setRows(newRows);
	};
	const handleDeleteRow = (idToDelete: string): void =>
		props.setRows(props.rows.filter((row) => row.id !== idToDelete));
	const handleAddItemToRow = (rowId: string) => {
		const row = props.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find row to add item');
		const newItem = createBlankGridItem();
		setActiveRow(row);
		setActiveItem(newItem);
		disableSaveButtons(true);
	};
	const handleCloneItem = (rowId: string, itemId: string) => {
		const row = props.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find item row');
		const newItems = row.items.reduce<RowItem[]>(
			(acc, item) =>
				item.modId === itemId ? [...acc, item, { ...item, id: uuid() }] : [...acc, item],
			[],
		);
		const newRows = props.rows.map((row) =>
			row.id !== rowId
				? row
				: {
						...row,
						items: newItems,
				  },
		);
		props.setRows(newRows);
	};
	const handleEditItem = (rowId: string, itemId: string) => {
		const row = props.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find item row');
		const item = row.items.find((item) => item.modId === itemId);
		if (!item) throw new Error('Cannot find item');
		setActiveRow(row);
		setActiveItem(item);
		disableSaveButtons(true);
	};
	const handleSaveItem = (newItem: RowItem): void => {
		if (!activeRow || !activeItem) throw new Error('activeRow or activeItem is not defined');
		const existingItem = activeRow.items.find((item) => item.id === newItem.id);
		const newItems = existingItem
			? activeRow.items.map((item) => (item.id === newItem.id ? newItem : item))
			: [...activeRow.items, newItem];
		const newRow = { ...activeRow, items: newItems };
		props.setRows(props.rows.map((row) => (row.id === activeRow.id ? newRow : row)));
		cancelEdit();
		disableSaveButtons(false);
	};
	const handleDeleteItem = (rowId: string, deletedItemId: string) => {
		const newRows = props.rows.map((row) =>
			row.id !== rowId
				? row
				: {
						...row,
						items: row.items.filter((item) => item.modId !== deletedItemId),
				  },
		);
		props.setRows(newRows);
	};
	return (
		<Grid
			activeCollectionRow={activeCollectionRow}
			activeItem={activeItem}
			activeRow={activeRow}
			cancelEdit={cancelEdit}
			courses={props.courses}
			handleAddCollectionRowClick={handleAddCollectionRowClick}
			handleAddItemToRow={handleAddItemToRow}
			handleAddRowClick={handleAddRowClick}
			handleCloneItem={handleCloneItem}
			handleDeleteItem={handleDeleteItem}
			handleDeleteRow={handleDeleteRow}
			handleEditItem={handleEditItem}
			handleEditRowClick={handleEditRowClick}
			handleReorderItems={handleReorderItems}
			handleReorderRows={handleReorderRows}
			handleSaveCollectionRow={handleSaveCollectionRow}
			handleSaveItem={handleSaveItem}
			handleSaveRow={handleSaveRow}
			instructors={props.instructors}
			modsInfo={props.modsInfo}
			rows={props.rows}
			tags={props.tags}
			thumbUrls={props.thumbUrls}
		/>
	);
};

export default GridContainer;
