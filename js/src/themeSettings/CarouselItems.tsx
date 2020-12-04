import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { faCog, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { CarouselItem } from '../types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	carouselItems: CarouselItem[];
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDragEnd: (result: DropResult) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CarouselItems: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h3>Current Carousel Items</h3>
		{props.carouselItems.length === 0 && (
			<div className="mb-2 text-muted">No carousel items to display.</div>
		)}
		<DragDropContext onDragEnd={props.handleDragEnd}>
			<Droppable direction="vertical" droppableId="droppable">
				{(provided) => (
					<div className="d-flex align-items-center flex-column mb-2" ref={provided.innerRef}>
						{props.carouselItems.map((item, i) => (
							<Draggable draggableId={item.id} index={i} key={item.id}>
								{(provided) => (
									<div
										className="carouselAdminItem"
										ref={provided.innerRef}
										style={{ userSelect: 'none' }}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<img src={item.url} />
										<div className="gridItemBtn gridItemBtnClose">
											<button data-id={item.id} onClick={props.handleDeleteItemClick}>
												<Icon icon={faTimes} />
											</button>
										</div>
										<div className="gridItemBtn gridItemBtnEdit">
											<button data-id={item.id} onClick={props.handleEditItemClick}>
												<Icon icon={faCog} />
											</button>
										</div>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	</>
);

export default CarouselItems;
