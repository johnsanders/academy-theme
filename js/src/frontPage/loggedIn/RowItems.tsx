import React from 'react';
import { Row } from '../../types';
import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleScroll: () => void;
	row: Row;
}

const RowItems: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<div
			className="gridRowItems"
			onMouseEnter={props.handleMouse}
			onMouseLeave={props.handleMouse}
			onScroll={props.handleScroll}
			ref={(el) => {
				if (el) props.containerRef.current = el;
			}}
		>
			{props.row.items.map((item) => (
				<div className="gridRowItem" key={item.modId}>
					<a href={item.url}>
						<div className="card">
							<div className="card-img-top">
								<img src={item.thumbUrl} />
								{item.duration ? <span className="duration">{item.duration}</span> : null}
							</div>
							<div className="card-body">
								<h4>{item.name}</h4>
								<div className="instructorsContainer">
									{item.instructors.map((instructor) => (
										<img
											className="avatar"
											data-tip={`Instructor: ${instructor.name}`}
											key={instructor.id}
											src={instructor.avatarUrl}
										/>
									))}
								</div>
								<div className="academyTagsContainer">
									{item.tags.map((tag) => (
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
						</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default RowItems;
