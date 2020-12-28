import { MoodleAcademyFront, Row, RowItem as RowItemType, Tag } from '../../types';
import ErrorBoundary from '../../shared/ErrorBoundary';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RowItem from './RowItem';
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleInit: () => void;
	modsInfo: MoodleAcademyFront['modsInfo'];
	rows: Row[];
	setActiveTagId: (tagId: string) => void;
	tag: Tag | undefined;
}

const Collection: React.FC<Props> = (props: Props): JSX.Element | null => {
	if (!props.tag) return <div>Could not find collection.</div>;
	const collectionItems = props.rows.reduce<RowItemType[]>(
		(acc, row) => [...acc, ...row.items.filter((item) => item.tags.includes(props.tag?.id || ''))],
		[],
	);
	const itemInitRef = React.useRef(0);
	const handleItemInit = () => {
		itemInitRef.current += 1;
		if (itemInitRef.current === collectionItems.length) props.handleInit();
	};
	const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.setActiveTagId('');
	};
	return (
		<ErrorBoundary errorMessage="Error rendering collection" handleError={props.handleInit}>
			<div className="mb-5">
				<button className="btn btn-secondary mb-3" onClick={handleBackClick}>
					<Icon className="mr-1" icon={faChevronLeft} />
					View All
				</button>
				<h2>Collection: {props.tag.name}</h2>
				<div className="d-flex flex-wrap justify-content-sm-center justify-content-lg-start">
					{collectionItems.map((item) => (
						<RowItem
							handleInit={handleItemInit}
							item={item}
							key={item.id}
							modsInfo={props.modsInfo}
							setActiveTagId={props.setActiveTagId}
						/>
					))}
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default Collection;
