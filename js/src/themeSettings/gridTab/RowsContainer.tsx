import { MoodleAcademySettings, Row as RowType } from '../../types';
import { DropResult } from 'react-beautiful-dnd';
import React from 'react';
import Rows from './Rows';

interface Props {
	handleAddItemToRow: (rowId: string) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRowClick: (rowId: string) => void;
	handleReorderItems: (rowId: string, from: number, to: number) => void;
	handleReorderRows: (from: number, to: number) => void;
	handleSaveRow: (row: RowType) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: RowType[];
}

const RowsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const activeRowIdRef = React.useRef<string>();
	const handleEditRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const rowId = e.currentTarget.dataset.id;
		if (rowId) props.handleEditRowClick(rowId);
	};
	const handleAddItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const rowId = e.currentTarget.dataset.id;
		if (rowId) props.handleAddItemToRow(rowId);
	};
	const handleDeleteRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const idToDelete = e.currentTarget.dataset.id;
		if (!idToDelete) throw new Error('Cannot find row id to delete');
		props.handleDeleteRow(idToDelete);
	};
	const handleItemDragEnd = (result: DropResult): void => {
		if (!activeRowIdRef.current || !result.destination) return;
		props.handleReorderItems(activeRowIdRef.current, result.source.index, result.destination.index);
	};
	const handleRowDragEnd = (result: DropResult): void => {
		if (!result.destination) return;
		props.handleReorderRows(result.source.index, result.destination.index);
	};
	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
		const id = e.currentTarget.dataset.id;
		if (id) activeRowIdRef.current = id;
	};
	return (
		<Rows
			handleAddItemClick={handleAddItemClick}
			handleCloneItem={props.handleCloneItem}
			handleDeleteItem={props.handleDeleteItem}
			handleDeleteRowClick={handleDeleteRowClick}
			handleEditItem={props.handleEditItem}
			handleEditRowClick={handleEditRowClick}
			handleItemDragEnd={handleItemDragEnd}
			handleMouseEnter={handleMouseEnter}
			handleRowDragEnd={handleRowDragEnd}
			modsInfo={props.modsInfo}
			rows={props.rows}
		/>
	);
};

export default RowsContainer;
