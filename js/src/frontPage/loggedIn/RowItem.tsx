import { MoodleAcademyFront, RowItem as RowItemType } from '../../types';
import { getInstructorById, getTagById } from '../../shared/getById';
import ErrorBoundary from '../../shared/ErrorBoundary';
import ImageWithFallback from '../../shared/ImageWithFallback';
import React from 'react';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	handleInit: () => void;
	item: RowItemType;
	modsInfo: MoodleAcademyFront['modsInfo'];
	setActiveTagId: (tagId: string) => void;
}

const RowItem: React.FC<Props> = (props: Props): JSX.Element => {
	const dateString =
		props.item.dateDisplayed && new Date(props.item.dateDisplayed).toLocaleString();
	const handleTagClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
		const tagId = e.currentTarget.dataset.id;
		if (tagId) props.setActiveTagId(tagId);
	};
	const handleError = () => props.handleInit();
	return (
		<div className="gridRowItem">
			<div className="card">
				<ErrorBoundary errorMessage="Error rendering item" handleError={handleError}>
					<div className="card-img-top">
						<a href={props.item.url}>
							<ImageWithFallback handleInit={props.handleInit} imgUrl={props.item.thumbUrl} />
						</a>
						{props.item.duration ? <span className="duration">{props.item.duration}</span> : null}
					</div>
					<div className="card-body">
						<a href={props.item.url}>
							<h4 className="mb-0">
								{props.item.modName === 'manual'
									? props.item.manualName
									: props.modsInfo[props.item.modId].name}
							</h4>
						</a>
						{dateString ? <div className="text-muted">{dateString}</div> : null}
						<div className="instructorsContainer">
							{props.item.instructors.map((instructorId) => {
								const instructor = getInstructorById(instructorId);
								if (!instructor) return null;
								return (
									<a href={instructor.bioUrl} key={instructor.id}>
										<img
											className="avatar"
											data-tip={`Instructor: ${instructor.name}`}
											src={instructor.avatarUrl}
										/>
									</a>
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
				</ErrorBoundary>
			</div>
		</div>
	);
};

export default RowItem;
