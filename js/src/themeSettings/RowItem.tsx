import { faCog, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { DraggableProvided } from 'react-beautiful-dnd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { RowItem as RowItemType } from '../types';
import getForegroundColor from '../helpers/getForegroundColor';

interface Props {
	provided: DraggableProvided;
	item: RowItemType;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	rowId: string;
}

const RowItem: React.FC<Props> = (props: Props): JSX.Element => (
	<div
		className="card m-2 gridRowItem"
		ref={props.provided.innerRef}
		style={{ userSelect: 'none' }}
		{...props.provided.draggableProps}
		{...props.provided.dragHandleProps}
	>
		<img className="card-img-top" src={props.item.thumbUrl} />
		<div className="card-body">
			<h4>{props.item.name}</h4>
			<div className="instructorsContainer">
				{props.item.instructors.map((instructor) => (
					<img
						className="avatar"
						data-tip={`Instructor: ${instructor.name}`}
						key={instructor.id}
						src={instructor.avatarUrl}
					/>
				))}
			</div>
			<div className="academyTagsContainer">
				{props.item.tags.map((tag) => (
					<span
						key={tag.id}
						style={{
							backgroundColor: tag.color,
							color: getForegroundColor(tag.color),
						}}
					>
						{tag.name}
					</span>
				))}
			</div>
		</div>
		<div className="gridItemBtn gridItemBtnClose">
			<button
				data-itemid={props.item.modId}
				data-rowid={props.rowId}
				onClick={props.handleDeleteItemClick}
			>
				<Icon icon={faTimes} />
			</button>
		</div>
		<div className="gridItemBtn gridItemBtnEdit">
			<button
				data-itemid={props.item.modId}
				data-rowid={props.rowId}
				onClick={props.handleEditItemClick}
			>
				<Icon icon={faCog} />
			</button>
		</div>
	</div>
);

export default RowItem;
