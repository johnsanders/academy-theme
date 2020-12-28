import { MoodleAcademySettings, RowItem as RowItemType } from '../../types';
import { faCog, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { getInstructorById, getTagById } from '../../shared/getById';
import { DraggableProvided } from 'react-beautiful-dnd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import ImageWithFallback from '../../shared/ImageWithFallback';
import React from 'react';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	item: RowItemType;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	provided: DraggableProvided;
	rowId: string;
}

const RowItem: React.FC<Props> = (props: Props): JSX.Element => {
	const dateString =
		props.item.dateDisplayed && new Date(props.item.dateDisplayed).toLocaleString();
	return (
		<div
			className="card m-2 gridRowItem"
			ref={props.provided.innerRef}
			style={{ userSelect: 'none' }}
			{...props.provided.draggableProps}
			{...props.provided.dragHandleProps}
		>
			<div className="card-img-top">
				<ImageWithFallback imgUrl={props.item.thumbUrl} />
			</div>
			<div className="card-body">
				<h4 className="mb-0">
					{props.item.modName === 'manual'
						? props.item.manualName
						: props.modsInfo[props.item.modId].name}
				</h4>
				{dateString ? <div className="text-muted">{dateString}</div> : null}
				<div className="instructorsContainer">
					{props.item.instructors.map((instructorId) => {
						const instructor = getInstructorById(instructorId);
						return !instructor ? null : (
							<img
								className="avatar"
								data-tip={`Instructor: ${instructor.name}`}
								key={instructor.id}
								src={instructor.avatarUrl}
							/>
						);
					})}
				</div>
				<div className="academyTagsContainer">
					{props.item.tags.map((tagId) => {
						const tag = getTagById(tagId);
						return !tag ? null : (
							<span
								key={tag.id}
								style={{
									backgroundColor: tag.color,
									color: getForegroundColor(tag.color),
								}}
							>
								{tag.name}
							</span>
						);
					})}
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
};

export default RowItem;
