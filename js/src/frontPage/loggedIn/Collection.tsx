import { Row, RowItem as RowItemType, Tag } from '../../types';
import GridItem from './GridItem';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleInit: () => void;
	loading: boolean;
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
		<div className={`mb-5 ${props.loading ? 'd-none' : ''}`}>
			<button className="btn btn-secondary mb-3" onClick={handleBackClick}>
				<Icon className="mr-1" icon={faChevronLeft} />
				View All
			</button>
			<h2>Collection: {props.tag.name}</h2>
			<div className="d-flex flex-wrap justify-content-sm-center justify-content-lg-start">
				{collectionItems.map((item) => (
					<GridItem
						handleInit={handleItemInit}
						item={item}
						key={item.id}
						setActiveTagId={props.setActiveTagId}
					/>
				))}
			</div>
		</div>
	);
};

export default Collection;
