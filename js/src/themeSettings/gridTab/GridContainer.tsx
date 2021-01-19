import { Course, Instructor, MoodleAcademySettings, Row, RowItem, Tag } from '../../types';
import { createBlankGridItem, createBlankGridRow } from './edit/createBlankElement';
import Grid from './Grid';
import React from 'react';
import disableSaveButtons from '../disableSaveButtons';

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
	const handleEditRowClick = (rowId: string): void => {
		const rowToEdit = props.rows.find((row) => row.id === rowId);
		if (rowToEdit) setActiveRow(rowToEdit);
		disableSaveButtons(true);
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
	const handleAddItemToRow = (rowId: string) => {
		const row = props.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find row to add item');
		const newItem = createBlankGridItem();
		setActiveRow(row);
		setActiveItem(newItem);
		disableSaveButtons(true);
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
	return (
		<Grid
			activeItem={activeItem}
			activeRow={activeRow}
			cancelEdit={cancelEdit}
			courses={props.courses}
			handleAddItemToRow={handleAddItemToRow}
			handleAddRowClick={handleAddRowClick}
			handleEditItem={handleEditItem}
			handleEditRowClick={handleEditRowClick}
			handleSaveItem={handleSaveItem}
			handleSaveRow={handleSaveRow}
			instructors={props.instructors}
			modsInfo={props.modsInfo}
			rows={props.rows}
			setRows={props.setRows}
			tags={props.tags}
			thumbUrls={props.thumbUrls}
		/>
	);
};

export default GridContainer;
