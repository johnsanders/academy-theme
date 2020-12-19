import { getInstructorById, getTagById } from '../../shared/getById';
import ImageWithLoader from './ImageWithLoader';
import React from 'react';
import { RowItem as RowItemType } from '../../types';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	item: RowItemType;
	setActiveTagId: (tagId: string) => void;
}

const RowItem: React.FC<Props> = (props: Props): JSX.Element => {
	const dateString =
		props.item.dateDisplayed && new Date(props.item.dateDisplayed).toLocaleString();
	const handleTagClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
		const tagId = e.currentTarget.dataset.id;
		if (tagId) props.setActiveTagId(tagId);
	};
	return (
		<div className="gridRowItem">
			<div className="card">
				<div className="card-img-top">
					<a href={props.item.url}>
						<ImageWithLoader imgUrl={props.item.thumbUrl} />
					</a>
					{props.item.duration ? <span className="duration">{props.item.duration}</span> : null}
				</div>
				<div className="card-body">
					<a href={props.item.url}>
						<h4 className="mb-0">{props.item.name}</h4>
					</a>
					{dateString ? <div className="text-muted">{dateString}</div> : null}
					<div className="instructorsContainer">
						{props.item.instructors.map((instructorId) => {
							const instructor = getInstructorById(instructorId);
							if (!instructor) return null;
							return (
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
							if (!tag) return null;
							return (
								<button
									data-id={tag.id}
									key={tag.id}
									onClick={handleTagClick}
									role="button"
									style={{
										backgroundColor: tag.color,
										color: getForegroundColor(tag.color),
									}}
								>
									{tag.name}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RowItem;