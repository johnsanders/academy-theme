import ErrorBoundary from '../../shared/ErrorBoundary';
import ImageWithFallback from '../../shared/ImageWithFallback';
import React from 'react';
import RowItemAttemptStatus from './RowItemAttemptStatus';
import RowItemInstructors from './RowItemInstructors';
import RowItemTags from './RowItemTags';
import { RowItem as RowItemType } from '../../types';

interface Props {
	attemptStatus: string;
	dateString: string | null | 0;
	handleError: () => void;
	handleInit: () => void;
	handleTagClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	item: RowItemType;
	name: string;
	url: string;
}

const RowItem: React.FC<Props> = (props: Props): JSX.Element => (
	<div className="gridRowItem">
		<RowItemAttemptStatus status={props.attemptStatus} />
		<div className="card">
			<ErrorBoundary errorMessage="Error rendering item" handleError={props.handleError}>
				<div className="card-img-top">
					<a href={props.url}>
						<ImageWithFallback handleInit={props.handleInit} imgUrl={props.item.thumbUrl} />
					</a>
					{props.item.duration ? <span className="duration">{props.item.duration}</span> : null}
				</div>
				<div className="card-body">
					<a href={props.url}>
						<h4 className="mb-0">{props.name}</h4>
					</a>
					{props.dateString ? <div className="text-muted">{props.dateString}</div> : null}
					<RowItemInstructors instructors={props.item.instructors} />
					<RowItemTags handleTagClick={props.handleTagClick} tags={props.item.tags} />
				</div>
			</ErrorBoundary>
		</div>
	</div>
);

export default RowItem;
