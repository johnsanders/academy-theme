import ErrorBoundary from '../../shared/ErrorBoundary';
import React from 'react';
import { Row } from '../../types';
import RowItem from './RowItem';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleInit: () => void;
	handleScroll: () => void;
	row: Row;
	setActiveTagId: (tagId: string) => void;
}

const RowItems: React.FC<Props> = (props: Props): JSX.Element => {
	const itemsInitCountRef = React.useRef(0);
	const handleItemInit = () => {
		itemsInitCountRef.current += 1;
		if (itemsInitCountRef.current === props.row.items.length) props.handleInit();
	};
	return (
		<ErrorBoundary errorMessage="Error rendering content row" handleError={props.handleInit}>
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
					return (
						<RowItem
							handleInit={handleItemInit}
							item={item}
							key={item.id}
							setActiveTagId={props.setActiveTagId}
						/>
					);
				})}
			</div>
		</ErrorBoundary>
	);
};

export default RowItems;
