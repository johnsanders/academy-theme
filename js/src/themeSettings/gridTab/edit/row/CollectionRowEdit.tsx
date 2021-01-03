import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tag } from '../../../../types';

interface Props {
	availableTags: Tag[];
	handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSaveCollectionRow: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleAddTag: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleDeleteTag: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDragEnd: (result: DropResult) => void;
	tags: Tag[];
}

const CollectionRow: React.FC<Props> = (props: Props) => (
	<div className="card">
		<div className="card-header">
			<h2>Edit Collection Row</h2>
		</div>
		<div className="card-body">
			<div className="form-group">
				<h4>Select Tags</h4>
				<div className="d-flex flex-wrap">
					{props.availableTags.length === 0 ? (
						<div>No tags available to add.</div>
					) : (
						props.availableTags.map((tag) => (
							<div
								className="gridRowCollection gridRowCollectionSettings"
								data-id={tag.id}
								key={tag.id}
								onClick={props.handleAddTag}
								role="button"
							>
								<img src={tag.thumbUrl} />
							</div>
						))
					)}
				</div>
			</div>
			<div className="form-group">
				<h4>Tags in Row</h4>
				<DragDropContext onDragEnd={props.handleDragEnd}>
					<Droppable direction="horizontal" droppableId="droppable">
						{(providedOuter) => (
							<div
								className="d-flex flex-wrap"
								ref={providedOuter.innerRef}
								{...providedOuter.droppableProps}
							>
								{props.tags.map((tag, i) => (
									<Draggable draggableId={tag.id} index={i} key={tag.id}>
										{(providedInner) => (
											<div
												className="gridRowCollection gridRowCollectionSettings"
												ref={providedInner.innerRef}
												{...providedInner.draggableProps}
												{...providedInner.dragHandleProps}
											>
												<img src={tag.thumbUrl} />
												<div className="gridItemBtn gridItemBtnClose">
													<button data-id={tag.id} onClick={props.handleDeleteTag}>
														<Icon icon={faTimes} />
													</button>
												</div>
											</div>
										)}
									</Draggable>
								))}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
			<div className="form-group">
				<button className="btn btn-secondary mr-1" onClick={props.handleSaveCollectionRow}>
					<Icon className="mr-1" icon={faCheck} />
					Done
				</button>
				<button className="btn btn-secondary" onClick={props.handleCancel}>
					<Icon className="mr-1" icon={faTimes} />
					Cancel
				</button>
			</div>
		</div>
	</div>
);

export default CollectionRow;
