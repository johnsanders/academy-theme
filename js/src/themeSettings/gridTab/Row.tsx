import { DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { Instructor, Row as RowType, Tag } from '../../types';
import { faPlusCircle, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RowItems from './RowItems';
import ScrollButtons from '../../shared/ScrollButtons';
import debounce from 'lodash/debounce';

interface Props {
	getInstructorById: (id: string) => Instructor | null;
	getTagById: (id: string) => Tag | null;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDragEnd: (result: DropResult, provided: ResponderProvided) => void;
	handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
	row: RowType;
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
			props.handleMouseEnter(e);
		}
		if (e.type === 'mouseleave') setHovered(false);
	};
	const handleScrollClick = (direction: string): void => {
		if (!containerRef.current) return;
		const distance = (containerRef.current.clientWidth - 25) * (direction === 'left' ? -1 : 1);
		containerRef.current.scroll({ behavior: 'smooth', left: distance });
	};
	const handleScrollEvent = (): void => updateContainerInfo();
	return (
		<div className="mb-4" data-id={props.row.id} onMouseEnter={props.handleMouseEnter}>
			<div className="d-flex align-items-center justify-content-between">
				<h4 className="w-50" style={{ borderBottom: 'none' }}>
					{props.row.name}
				</h4>
				<span>
					<button
						className="btn btn-secondary btn-sm mr-2"
						data-id={props.row.id}
						onClick={props.handleAddItemClick}
					>
						<Icon className="mr-1" icon={faPlusCircle} />
						Add an Item to Row
					</button>
					<button
						className="btn btn-secondary btn-sm"
						data-id={props.row.id}
						onClick={props.handleDeleteRowClick}
					>
						<Icon className="mr-1" icon={faTrash} />
						Delete Row
					</button>
				</span>
			</div>
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
					getInstructorById={props.getInstructorById}
					getTagById={props.getTagById}
					handleAddItemClick={props.handleAddItemClick}
					handleDeleteItemClick={props.handleDeleteItemClick}
					handleDeleteRowClick={props.handleDeleteRowClick}
					handleDragEnd={props.handleDragEnd}
					handleEditItemClick={props.handleEditItemClick}
					handleMouse={handleMouseEvent}
					handleScroll={handleScrollEvent}
					items={props.row.items}
					rowId={props.row.id}
				/>
			</div>
		</div>
	);
};

export default Row;
