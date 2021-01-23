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
	handleAddItemClick: (rowId: string) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditRow: (rowId: string) => void;
	handleItemDragEnd: (e: DragEndEvent) => void;
	handleItemDragOver: (e: DragOverEvent) => void;
	handleItemDragStart: (e: DragStartEvent) => void;
	handleMoveRow: (rowId: string, increment: number) => void;
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
			{props.rows.map((row, i) => (
				<RowContainer
					handleAddItemClick={props.handleAddItemClick}
					handleCloneItem={props.handleCloneItem}
					handleDeleteItem={props.handleDeleteItem}
					handleDeleteRow={props.handleDeleteRow}
					handleEditItem={props.handleEditItem}
					handleEditRow={props.handleEditRow}
					handleMoveRow={props.handleMoveRow}
					isFirst={i === 0}
					isLast={i === props.rows.length - 1}
					key={row.id}
					modsInfo={props.modsInfo}
					row={row}
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
