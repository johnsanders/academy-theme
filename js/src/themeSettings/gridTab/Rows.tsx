import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
	KeyboardSensor,
	PointerSensor,
	closestCenter,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { MoodleAcademySettings, Row as RowType } from '../../types';
import React from 'react';
import RowContainer from './RowContainer';
import RowItemDragPlaceholder from './RowItemDragPlaceholder';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

interface Props {
	activeDragId: string | null;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleItemDragEnd: (e: DragEndEvent) => void;
	handleItemDragOver: (e: DragOverEvent) => void;
	handleItemDragStart: (e: DragStartEvent) => void;
	handleMoveItemToRow: (itemId: string, rowFromId: string, rowToId: string) => void;
	handleRowDragEnd: (result: any) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: RowType[];
}

const Rows: React.FC<Props> = (props: Props): JSX.Element => {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);
	return (
		<DndContext
			collisionDetection={closestCenter}
			onDragEnd={props.handleItemDragEnd}
			onDragOver={props.handleItemDragOver}
			onDragStart={props.handleItemDragStart}
			sensors={sensors}
		>
			{props.rows.map((row) => (
				<RowContainer
					handleAddItemClick={props.handleAddItemClick}
					handleCloneItem={props.handleCloneItem}
					handleDeleteItem={props.handleDeleteItem}
					handleDeleteRow={props.handleDeleteRow}
					handleEditItem={props.handleEditItem}
					handleEditRowClick={props.handleEditRowClick}
					handleMoveItemToRow={props.handleMoveItemToRow}
					key={row.id}
					modsInfo={props.modsInfo}
					row={row}
					rows={props.rows}
				/>
			))}
			<DragOverlay>
				{!props.activeDragId ? null : (
					<RowItemDragPlaceholder
						activeItemId={props.activeDragId}
						items={props.rows.map((row) => row.items).flat()}
						modsInfo={props.modsInfo}
					/>
				)}
			</DragOverlay>
		</DndContext>
	);
};

export default Rows;
