import { getInstructorById, getTagById } from '../../shared/getById';
import ImageWithLoader from './ImageWithLoader';
import React from 'react';
import { Row } from '../../types';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleScroll: () => void;
	row: Row;
}

const RowItems: React.FC<Props> = (props: Props): JSX.Element => (
	<div
		className="gridRowItems"
		onMouseEnter={props.handleMouse}
		onMouseLeave={props.handleMouse}
		onScroll={props.handleScroll}
		ref={(el) => {
			if (el) props.containerRef.current = el;
		}}
	>
		{props.row.items.map((item) => {
			const dateString = item.dateDisplayed && new Date(item.dateDisplayed).toLocaleString();
			return (
				<div className="gridRowItem" key={item.modId}>
					<a href={item.url}>
						<div className="card">
							<div className="card-img-top">
								<ImageWithLoader imgUrl={item.thumbUrl} />
								{item.duration ? <span className="duration">{item.duration}</span> : null}
							</div>
							<div className="card-body">
								<h4 className="mb-0">{item.name}</h4>
								{dateString ? <div className="text-muted">{dateString}</div> : null}
								<div className="instructorsContainer">
									{item.instructors.map((instructorId) => {
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
									{item.tags.map((tagId) => {
										const tag = getTagById(tagId);
										if (!tag) return null;
										return (
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
						</div>
					</a>
				</div>
			);
		})}
	</div>
);

export default RowItems;
