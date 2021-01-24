import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { MoodleAcademySettings, Row, RowItem, Row as RowType } from '../../types';
import React from 'react';
import Rows from './Rows';
import { arrayMove } from '@dnd-kit/sortable';
import getItemInRows from '../../helpers/getItemInRows';
import { v4 as uuid } from 'uuid';

interface Props {
	handleAddItemToRow: (rowId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRowClick: (rowId: string) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: RowType[];
	setRows: (rows: Row[]) => void;
}

const RowsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeDragId, setActiveDragId] = React.useState<string | null>(null);
	const handleMoveRow = (rowId: string, increment: number): void => {
		const rowIndex = props.rows.findIndex((row) => row.id === rowId);
		const newRows = arrayMove(props.rows, rowIndex, rowIndex + increment);
		props.setRows(newRows);
	};
	const handleDeleteRow = (rowId: string): void =>
		props.setRows(props.rows.filter((row) => row.id !== rowId));
	const handleItemDragOver = (e: DragOverEvent) => {
		const fromRow = props.rows.find((row) => row.items.find((item) => item.id === e.active.id));
		const toRow = props.rows.find((row) => row.items.find((item) => item.id === e.over?.id));
		if (!fromRow || !toRow || fromRow === toRow) return;
		const activeItemIndex = fromRow.items.findIndex((item) => item.id === e.active.id);
		const activeItem = fromRow.items[activeItemIndex];
		const overIndex = toRow.items.findIndex((item) => item.id === e.over?.id);
		const isBeyondLastItem =
			e.over &&
			overIndex === toRow.items.length - 1 &&
			e.draggingRect.offsetLeft > e.over.rect.offsetLeft + e.over.rect.width;
		const modifier = isBeyondLastItem ? 1 : 0;
		const newIndex = overIndex >= 0 ? overIndex + modifier : toRow.items.length + 1;
		const newToRow = {
			...toRow,
			items: toRow.items.reduce<RowItem[]>(
				(acc, item, i) => (i === newIndex ? [...acc, activeItem, item] : [...acc, item]),
				[],
			),
		};
		const newFromRow = {
			...fromRow,
			items: fromRow.items.filter((item) => item.id !== e.active.id),
		};
		const newRows = props.rows.map((row) => {
			if (row.id === newFromRow.id) return newFromRow;
			if (row.id === newToRow.id) return newToRow;
			return row;
		});
		props.setRows(newRows);
	};
	const handleItemDragStart = (e: DragStartEvent): void => setActiveDragId(e.active.id);
	const handleItemDragEnd = (e: DragEndEvent): void => {
		if (!e.over?.id) return;
		const fromItem = getItemInRows(e.active.id, props.rows);
		const toItem = getItemInRows(e.over.id, props.rows);
		if (!fromItem || !toItem) return;
		const newRow = {
			...toItem.row,
			items: arrayMove(toItem.row.items, fromItem.itemIndex, toItem.itemIndex),
		};
		const newRows = props.rows.map((row) => (row.id === newRow.id ? newRow : row));
		props.setRows(newRows);
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
		<Rows
			activeDragId={activeDragId}
			handleAddItemClick={props.handleAddItemToRow}
			handleCloneItem={handleCloneItem}
			handleDeleteItem={handleDeleteItem}
			handleDeleteRow={handleDeleteRow}
			handleEditItem={props.handleEditItem}
			handleEditRow={props.handleEditRowClick}
			handleItemDragEnd={handleItemDragEnd}
			handleItemDragOver={handleItemDragOver}
			handleItemDragStart={handleItemDragStart}
			handleMoveRow={handleMoveRow}
			modsInfo={props.modsInfo}
			rows={props.rows}
		/>
	);
};

export default RowsContainer;
