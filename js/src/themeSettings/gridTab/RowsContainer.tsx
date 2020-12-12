import { Instructor, Row as RowType, Tag } from '../../types';
import { DropResult } from 'react-beautiful-dnd';
import React from 'react';
import Row from './Row';
import RowAddContainer from './RowAddContainer';

interface Props {
	getInstructorById: (id: string) => Instructor | null;
	getTagById: (id: string) => Tag | null;
	handleAddItemToRow: (rowId: string) => void;
	handleAddRow: (row: RowType) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleReorderRow: (rowId: string, from: number, to: number) => void;
	rows: RowType[];
}

const RowsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const activeRowIdRef = React.useRef<string>();
	const handleAddItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const rowId = e.currentTarget.dataset.id;
		if (rowId) props.handleAddItemToRow(rowId);
	};
	const handleEditItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const rowId = e.currentTarget.dataset.rowid;
		const itemId = e.currentTarget.dataset.itemid;
		if (itemId && rowId) props.handleEditItem(rowId, itemId);
	};
	const handleDeleteRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const idToDelete = e.currentTarget.dataset.id;
		if (!idToDelete) throw new Error('Cannot find row id to delete');
		props.handleDeleteRow(idToDelete);
	};
	const handleDeleteItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const rowId = e.currentTarget.dataset.rowid;
		const itemId = e.currentTarget.dataset.itemid;
		if (itemId && rowId) props.handleDeleteItem(rowId, itemId);
	};
	const handleDragEnd = (result: DropResult): void => {
		if (!activeRowIdRef.current || !result.destination)
			throw new Error('Cannot find active row or destination');
		props.handleReorderRow(activeRowIdRef.current, result.source.index, result.destination.index);
	};
	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
		const id = e.currentTarget.dataset.id;
		if (id) activeRowIdRef.current = id;
	};
	console.log(props.rows);
	return (
		<>
			{props.rows.map((row) => (
				<Row
					getInstructorById={props.getInstructorById}
					getTagById={props.getTagById}
					handleAddItemClick={handleAddItemClick}
					handleDeleteItemClick={handleDeleteItemClick}
					handleDeleteRowClick={handleDeleteRowClick}
					handleDragEnd={handleDragEnd}
					handleEditItemClick={handleEditItemClick}
					handleMouseEnter={handleMouseEnter}
					key={row.id}
					row={row}
				/>
			))}
			<RowAddContainer handleAdd={props.handleAddRow} />
		</>
	);
};

export default RowsContainer;
