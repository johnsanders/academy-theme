import {
	DragDropContext,
	Draggable,
	DropResult,
	Droppable,
	ResponderProvided,
} from 'react-beautiful-dnd';
import { MoodleAcademySettings, RowItem as RowItemType } from '../../types';
import React from 'react';
import RowItem from './RowItem';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDragEnd: (result: DropResult, provided: ResponderProvided) => void;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleScroll: () => void;
	items: RowItemType[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	rowId: string;
}

const Row: React.FC<Props> = (props: Props): JSX.Element => (
	<div
		onMouseEnter={props.handleMouse}
		onMouseLeave={props.handleMouse}
		ref={(el) => {
			if (el) {
				const itemsContainer = el.querySelector<HTMLDivElement>('.gridRowItems');
				if (itemsContainer) props.containerRef.current = itemsContainer;
			}
		}}
	>
		<DragDropContext onDragEnd={props.handleDragEnd}>
			<Droppable direction="horizontal" droppableId="droppable">
				{(provided) => (
					<div
						className="gridRowItems"
						onScroll={props.handleScroll}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{props.items.length === 0 ? (
							<div className="text-muted my-2">No items to show in this row.</div>
						) : null}
						{props.items.map((item, i) => (
							<Draggable draggableId={item.modId} index={i} key={item.modId}>
								{(provided) => (
									<RowItem
										handleDeleteItemClick={props.handleDeleteItemClick}
										handleEditItemClick={props.handleEditItemClick}
										item={item}
										modsInfo={props.modsInfo}
										provided={provided}
										rowId={props.rowId}
									/>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	</div>
);

export default Row;
