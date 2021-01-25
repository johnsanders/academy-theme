import { MoodleAcademySettings, RowItem as RowItemType } from '../../types';
import { getInstructorById, getTagById } from '../../shared/getById';
import ImageWithFallback from '../../shared/ImageWithFallback';
import React from 'react';
import RowItemButtons from './RowItemButtons';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	attributes?: {
		role: string;
		tabIndex: number;
		'aria-pressed': boolean | undefined;
		'aria-roledescription': string;
		'aria-describedby': string;
	};
	item: RowItemType;
	handleCloneItem?: (rowId: string, itemId: string) => void;
	handleDeleteItem?: (rowId: string, itemId: string) => void;
	handleEditItem?: (rowId: string, itemId: string) => void;
	handleMoveToRow?: (itemId: string, rowFromId: string, rowToId: string) => void;
	/* eslint-disable-next-line @typescript-eslint/ban-types */
	listeners?: Record<string, Function>;
	modsInfo: MoodleAcademySettings['modsInfo'];
	rowId?: string;
	style?: React.CSSProperties;
}

const RowItem = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
	const dateString =
		props.item.dateDisplayed && new Date(props.item.dateDisplayed).toLocaleString();
	return (
		<div className="card m-2 gridRowItem" ref={ref} style={props.style} {...props.attributes}>
			<div className="card-img-top" {...props.listeners}>
				<ImageWithFallback imgUrl={props.item.thumbUrl} />
				{props.item.duration ? <span className="duration">{props.item.duration}</span> : null}
			</div>
			<div className="card-body">
				<h4 className="mb-0">
					{props.item.modName === 'manual'
						? props.item.manualName
						: props.modsInfo[props.item.modId]?.name}
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
				itemId={props.item.id}
				modId={props.item.modId}
				rowId={props.rowId || ''}
			/>
		</div>
	);
});

RowItem.displayName = 'RowItem';

export default RowItem;
