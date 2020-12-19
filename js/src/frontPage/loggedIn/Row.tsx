import React from 'react';
import RowItems from './RowItems';
import { Row as RowType } from '../../types';
import ScrollButtons from '../../shared/ScrollButtons';
import debounce from 'lodash/debounce';

interface Props {
	row: RowType;
	setActiveTagId: (tagId: string) => void;
}

const Row: React.FC<Props> = (props: Props): JSX.Element => {
	const containerRef = React.useRef<HTMLDivElement>();
	const [containerClientWidth, setContainerClientWidth] = React.useState(0);
	const [containerScrollLeft, setContainerScrollLeft] = React.useState(0);
	const [containerScrollWidth, setContainerScrollWidth] = React.useState(0);
	const [hovered, setHovered] = React.useState(false);
	const updateContainerInfo = debounce((): void => {
		if (!containerRef.current) return;
		setContainerClientWidth(containerRef.current.clientWidth);
		setContainerScrollLeft(containerRef.current.scrollLeft);
		setContainerScrollWidth(containerRef.current.scrollWidth);
	}, 250);
	const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>): void => {
		if (e.type === 'mouseenter') {
			setHovered(true);
			updateContainerInfo();
		} else if (e.type === 'mouseleave') setHovered(false);
	};
	const handleScrollClick = (direction: string): void => {
		if (!containerRef.current) return;
		const distance = (containerRef.current.clientWidth - 25) * (direction === 'left' ? -1 : 1);
		containerRef.current.scroll({ behavior: 'smooth', left: distance });
	};
	const handleScrollEvent = (): void => updateContainerInfo();
	return (
		<div>
			<h3>{props.row.name}</h3>
			<div className="position-relative">
				<ScrollButtons
					containerClientWidth={containerClientWidth}
					containerScrollLeft={containerScrollLeft}
					containerScrollWidth={containerScrollWidth}
					handleMouse={handleMouseEvent}
					handleScroll={handleScrollClick}
					hovered={hovered}
				/>
				<RowItems
					containerRef={containerRef}
					handleMouse={handleMouseEvent}
					handleScroll={handleScrollEvent}
					row={props.row}
					setActiveTagId={props.setActiveTagId}
				/>
			</div>
		</div>
	);
};

export default Row;
