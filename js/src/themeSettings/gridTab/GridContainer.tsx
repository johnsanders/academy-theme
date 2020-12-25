import { Config, Row, RowItem } from '../../types';
import { createBlankGridItem, createBlankGridRow } from './edit/createBlankElement';
import Grid from './Grid';
import React from 'react';
import arrayMove from 'array-move';
import disableSaveButtons from '../disableSaveButtons';

interface Props {
	config: Config;
	setRows: (rows: Row[]) => void;
}

export const createModuleUrl = (id: string, modname: string): string =>
	`/mod/${modname}/view.php?id=${id}`;

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
		const rowToEdit = props.config.rows.find((row) => row.id === rowId);
		if (rowToEdit) setActiveRow(rowToEdit);
		disableSaveButtons(true);
	};
	const handleSaveRow = (newRow: Row): void => {
		const existingRow = props.config.rows.find((row) => row.id === newRow.id);
		const newRows = existingRow
			? props.config.rows.map((row) => (row.id === newRow.id ? newRow : row))
			: [...props.config.rows, newRow];
		props.setRows(newRows);
		setActiveRow(null);
		disableSaveButtons(false);
	};
	const handleReorderRow = (rowId: string, from: number, to: number): void => {
		const row = props.config.rows.find((row) => row.id === rowId);
		if (!row) throw new Error('Cannot find row to reorder');
		const newItems = arrayMove(row.items, from, to);
		const newRow = { ...row, items: newItems };
		const newRows = props.config.rows.map((row) => (row.id === rowId ? newRow : row));
		props.setRows(newRows);
	};
	const handleDeleteRow = (idToDelete: string): void =>
		props.setRows(props.config.rows.filter((row) => row.id !== idToDelete));
	const handleAddItemToRow = (rowId: string) => {
		const row = props.config.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find row to add item');
		const newItem = createBlankGridItem();
		setActiveRow(row);
		setActiveItem(newItem);
		disableSaveButtons(true);
	};
	const handleEditItem = (rowId: string, itemId: string) => {
		const row = props.config.rows.find((row) => row.id == rowId);
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
		props.setRows(props.config.rows.map((row) => (row.id === activeRow.id ? newRow : row)));
		cancelEdit();
		disableSaveButtons(false);
	};
	const handleDeleteItem = (rowId: string, deletedItemId: string) => {
		const newRows = props.config.rows.map((row) =>
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
			activeItem={activeItem}
			activeRow={activeRow}
			cancelEdit={cancelEdit}
			config={props.config}
			handleAddItemToRow={handleAddItemToRow}
			handleAddRowClick={handleAddRowClick}
			handleDeleteItem={handleDeleteItem}
			handleDeleteRow={handleDeleteRow}
			handleEditItem={handleEditItem}
			handleEditRowClick={handleEditRowClick}
			handleReorderRow={handleReorderRow}
			handleSaveItem={handleSaveItem}
			handleSaveRow={handleSaveRow}
		/>
	);
};

export default GridContainer;
