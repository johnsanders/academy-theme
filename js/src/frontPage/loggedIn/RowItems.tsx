import GridItem from './GridItem';
import React from 'react';
import { Row } from '../../types';

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
					<GridItem
						handleInit={handleItemInit}
						item={item}
						key={item.id}
						setActiveTagId={props.setActiveTagId}
					/>
				);
			})}
		</div>
	);
};

export default RowItems;
