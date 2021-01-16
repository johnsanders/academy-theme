import { MoodleAcademySettings, RowItem as RowItemType } from '../../types';
import { getInstructorById, getTagById } from '../../shared/getById';
import { DraggableProvided } from 'react-beautiful-dnd';
import ImageWithFallback from '../../shared/ImageWithFallback';
import React from 'react';
import RowItemButtons from './RowItemButtons';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	item: RowItemType;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
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
			{...props.provided.draggableProps}
			{...props.provided.dragHandleProps}
		>
			<div className="card-img-top">
				<ImageWithFallback imgUrl={props.item.thumbUrl} />
				{props.item.duration ? <span className="duration">{props.item.duration}</span> : null}
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
			<RowItemButtons
				handleCloneItem={props.handleCloneItem}
				handleDeleteItem={props.handleDeleteItem}
				handleEditItem={props.handleEditItem}
				modId={props.item.modId}
				rowId={props.rowId}
			/>
		</div>
	);
};

export default RowItem;
