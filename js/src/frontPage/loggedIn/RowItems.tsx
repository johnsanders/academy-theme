import React from 'react';
import { Row } from '../../types';
import RowItem from './RowItem';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleScroll: () => void;
	row: Row;
	setActiveTagId: (tagId: string) => void;
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
			return <RowItem item={item} key={item.id} setActiveTagId={props.setActiveTagId} />;
		})}
	</div>
);

export default RowItems;
