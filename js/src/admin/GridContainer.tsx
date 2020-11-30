declare const M: { cfg: { wwwroot: string } };
import { Config, Row, RowItem } from '../types';
import EditItemContainer from './edit/EditItemContainer';
import React from 'react';
import RowsContainer from './RowsContainer';
import arrayMove from 'array-move';
import { createBlankGridItem } from '../helpers/createBlankItem';

interface Props {
	config: Config;
	inputRef: React.MutableRefObject<HTMLInputElement>;
	setRows: (rows: Row[]) => void;
}

export const createModuleUrl = (id: string, modname: string): string =>
	`${M.cfg.wwwroot}/mod/${modname}/view.php?id=${id}`;

const GridContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeItem, setActiveItem] = React.useState<RowItem | null>(null);
	const [activeRow, setActiveRow] = React.useState<Row | null>(null);
	const cancelEdit = (): void => {
		setActiveItem(null);
		setActiveRow(null);
	};
	const handleAddRow = (newRow: Row): void => props.setRows([...props.config.rows, newRow]);
	const handleDeleteRow = (idToDelete: string): void =>
		props.setRows(props.config.rows.filter((row) => row.id !== idToDelete));
	const handleAddItemToRow = (rowId: string) => {
		const row = props.config.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find row to add item');
		const newItem = createBlankGridItem();
		setActiveRow(row);
		setActiveItem(newItem);
	};
	const handleEditItem = (rowId: string, itemId: string) => {
		const row = props.config.rows.find((row) => row.id == rowId);
		if (!row) throw new Error('Cannot find item row');
		const item = row.items.find((item) => item.modId === itemId);
		if (!item) throw new Error('Cannot find item');
		setActiveRow(row);
		setActiveItem(item);
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
	};
	const handleReorderRow = (rowId: string, from: number, to: number): void => {
		const row = props.config.rows.find((row) => row.id === rowId);
		if (!row) throw new Error('Cannot find row to reorder');
		const newItems = arrayMove(row.items, from, to);
		const newRow = { ...row, items: newItems };
		const newRows = props.config.rows.map((row) => (row.id === rowId ? newRow : row));
		props.setRows(newRows);
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
		<>
			{activeRow || activeItem ? null : (
				<RowsContainer
					handleAddItemToRow={handleAddItemToRow}
					handleAddRow={handleAddRow}
					handleDeleteItem={handleDeleteItem}
					handleDeleteRow={handleDeleteRow}
					handleEditItem={handleEditItem}
					handleReorderRow={handleReorderRow}
					rows={props.config.rows}
				/>
			)}
			{activeItem && activeRow ? (
				<EditItemContainer
					activeItem={activeItem}
					activeRow={activeRow}
					allInstructors={props.config.instructors}
					allTags={props.config.tags}
					cancelEdit={cancelEdit}
					handleSave={handleSaveItem}
				/>
			) : null}
		</>
	);
};

export default GridContainer;
