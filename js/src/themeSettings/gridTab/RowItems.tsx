import {
	DragDropContext,
	Draggable,
	DropResult,
	Droppable,
	ResponderProvided,
} from 'react-beautiful-dnd';
import { MoodleAcademySettings, Row, RowItem as RowItemType } from '../../types';
import React from 'react';
import RowItem from './RowItem';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleItemDragEnd: (result: DropResult, provided: ResponderProvided) => void;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleMoveItemToRow: (temId: string, rowFromId: string, rowToId: string) => void;
	handleScroll: () => void;
	items: RowItemType[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	overflowBehavior: string;
	rowId: string;
	rows: Row[];
}

const RowItems: React.FC<Props> = (props: Props): JSX.Element => (
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
		<DragDropContext onDragEnd={props.handleItemDragEnd}>
			<Droppable direction="horizontal" droppableId={props.rowId}>
				{(providedOuter) => (
					<div
						className={`gridRowItems gridRowItems_${props.overflowBehavior}`}
						onScroll={props.handleScroll}
						ref={providedOuter.innerRef}
						{...providedOuter.droppableProps}
					>
						{props.items.length === 0 ? (
							<div className="text-muted my-2">No items to show in this row.</div>
						) : null}
						{props.items.map((item, i) => (
							<Draggable draggableId={item.id} index={i} key={item.id}>
								{(providedInner) => (
									<RowItem
										handleCloneItem={props.handleCloneItem}
										handleDeleteItem={props.handleDeleteItem}
										handleEditItem={props.handleEditItem}
										handleMoveToRow={props.handleMoveItemToRow}
										item={item}
										modsInfo={props.modsInfo}
										provided={providedInner}
										rowId={props.rowId}
										rows={props.rows}
									/>
								)}
							</Draggable>
						))}
						{providedOuter.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	</div>
);

export default RowItems;
