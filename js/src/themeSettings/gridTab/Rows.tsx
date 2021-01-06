import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { MoodleAcademySettings, Row as RowType } from '../../types';
import React from 'react';
import RowContainer from './RowContainer';

interface Props {
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleItemDragEnd: (resut: DropResult) => void;
	handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleRowDragEnd: (result: DropResult) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: RowType[];
}

const Rows: React.FC<Props> = (props: Props): JSX.Element => (
	<DragDropContext onDragEnd={props.handleRowDragEnd}>
		<Droppable direction="vertical" droppableId="droppableRows">
			{(providedOuter) => (
				<div ref={providedOuter.innerRef} {...providedOuter.droppableProps}>
					{props.rows.map((row, i) => (
						<Draggable draggableId={row.id} index={i} key={row.id}>
							{(providedInner) => (
								<RowContainer
									handleAddItemClick={props.handleAddItemClick}
									handleDeleteItemClick={props.handleDeleteItemClick}
									handleDeleteRowClick={props.handleDeleteRowClick}
									handleEditItemClick={props.handleEditItemClick}
									handleEditRowClick={props.handleEditRowClick}
									handleItemDragEnd={props.handleItemDragEnd}
									handleMouseEnter={props.handleMouseEnter}
									key={row.id}
									modsInfo={props.modsInfo}
									provided={providedInner}
									row={row}
								/>
							)}
						</Draggable>
					))}
				</div>
			)}
		</Droppable>
	</DragDropContext>
);

export default Rows;
