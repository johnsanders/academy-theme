import { DraggableProvided, DropResult } from 'react-beautiful-dnd';
import { MoodleAcademySettings, Row as RowType } from '../../types';
import React from 'react';
import Row from './Row';
import debounce from 'lodash/debounce';

interface Props {
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleItemDragEnd: (result: DropResult) => void;
	handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	provided: DraggableProvided;
	row: RowType;
}

const RowContainer: React.FC<Props> = (props: Props): JSX.Element => {
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
			props.handleMouseEnter(e);
		}
		if (e.type === 'mouseleave') setHovered(false);
	};
	const handleScrollClick = (direction: string): void => {
		if (!containerRef.current) return;
		const { clientWidth, scrollLeft } = containerRef.current;
		const plusMinus = direction === 'left' ? -1 : 1;
		const distance = scrollLeft + (clientWidth - 25) * plusMinus;
		containerRef.current.scroll({ behavior: 'smooth', left: distance });
	};
	const handleScrollEvent = (): void => updateContainerInfo();
	return (
		<Row
			containerClientWidth={containerClientWidth}
			containerRef={containerRef}
			containerScrollLeft={containerScrollLeft}
			containerScrollWidth={containerScrollWidth}
			handleAddItemClick={props.handleAddItemClick}
			handleDeleteItemClick={props.handleDeleteItemClick}
			handleDeleteRowClick={props.handleDeleteRowClick}
			handleEditItemClick={props.handleEditItemClick}
			handleEditRowClick={props.handleEditRowClick}
			handleItemDragEnd={props.handleItemDragEnd}
			handleMouseEnter={props.handleMouseEnter}
			handleMouseEvent={handleMouseEvent}
			handleScrollClick={handleScrollClick}
			handleScrollEvent={handleScrollEvent}
			hovered={hovered}
			modsInfo={props.modsInfo}
			provided={props.provided}
			row={props.row}
		/>
	);
};

export default RowContainer;