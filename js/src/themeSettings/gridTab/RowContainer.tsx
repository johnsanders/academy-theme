import { MoodleAcademySettings, Row as RowType } from '../../types';
import React from 'react';
import Row from './Row';
import debounce from 'lodash/debounce';

interface Props {
	handleAddItemClick: (rowId) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRow: (rowId: string) => void;
	handleMoveRow: (rowId: string, increment: number) => void;
	isFirst: boolean;
	isLast: boolean;
	modsInfo: MoodleAcademySettings['modsInfo'];
	row: RowType;
}

const RowContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const containerRef = React.useRef<HTMLDivElement>();
	const [containerClientWidth, setContainerClientWidth] = React.useState(0);
	const [containerScrollLeft, setContainerScrollLeft] = React.useState(0);
	const [containerScrollWidth, setContainerScrollWidth] = React.useState(0);
	const [hovered, setHovered] = React.useState(false);
	const handleAddItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const rowId = e.currentTarget.dataset.id;
		if (rowId) props.handleAddItemClick(rowId);
	};
	const handleEditRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const rowId = e.currentTarget.dataset.id;
		if (rowId) props.handleEditRow(props.row.id);
	};
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
	const handleMoveRowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const direction = e.currentTarget.dataset.direction;
		if (!direction) return;
		props.handleMoveRow(props.row.id, direction === 'up' ? -1 : 1);
	};
	const handleDeleteRowClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const idToDelete = e.currentTarget.dataset.id;
		if (!idToDelete) return;
		props.handleDeleteRow(idToDelete);
	};
	return (
		<Row
			containerClientWidth={containerClientWidth}
			containerRef={containerRef}
			containerScrollLeft={containerScrollLeft}
			containerScrollWidth={containerScrollWidth}
			handleAddItemClick={handleAddItemClick}
			handleCloneItem={props.handleCloneItem}
			handleDeleteItem={props.handleDeleteItem}
			handleDeleteRowClick={handleDeleteRowClick}
			handleEditItem={props.handleEditItem}
			handleEditRowClick={handleEditRowClick}
			handleMouseEvent={handleMouseEvent}
			handleMoveRowClick={handleMoveRowClick}
			handleScrollClick={handleScrollClick}
			handleScrollEvent={handleScrollEvent}
			hovered={hovered}
			isFirst={props.isFirst}
			isLast={props.isLast}
			modsInfo={props.modsInfo}
			row={props.row}
		/>
	);
};

export default RowContainer;
