import { MoodleAcademySettings, Row as RowType } from '../../types';
import React from 'react';
import RowButtons from './RowButtons';
import RowItems from './RowItems';
import ScrollButtons from '../../shared/ScrollButtons';

interface Props {
	containerClientWidth: number;
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	containerScrollLeft: number;
	containerScrollWidth: number;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleMouseEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleMoveRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleScrollEvent: () => void;
	handleScrollClick: (direction: string) => void;
	isFirst: boolean;
	isLast: boolean;
	hovered: boolean;
	modsInfo: MoodleAcademySettings['modsInfo'];
	row: RowType;
}

const Row: React.FC<Props> = (props: Props): JSX.Element => (
	<div className="mb-4" data-id={props.row.id}>
		<div className="d-flex align-items-center justify-content-between">
			<h4 className="w-50" style={{ borderBottom: 'none' }}>
				{props.row.name}
			</h4>
			<RowButtons
				handleAddItemClick={props.handleAddItemClick}
				handleDeleteClick={props.handleDeleteRowClick}
				handleEditClick={props.handleEditRowClick}
				handleMoveClick={props.handleMoveRowClick}
				isFirst={props.isFirst}
				isLast={props.isLast}
				rowId={props.row.id}
			/>
		</div>
		<div className="position-relative">
			{props.row.overflowBehavior === 'scroll' ? (
				<ScrollButtons
					containerClientWidth={props.containerClientWidth}
					containerScrollLeft={props.containerScrollLeft}
					containerScrollWidth={props.containerScrollWidth}
					handleMouse={props.handleMouseEvent}
					handleScroll={props.handleScrollClick}
					hovered={props.hovered}
				/>
			) : null}
			<RowItems
				containerRef={props.containerRef}
				handleAddItemClick={props.handleAddItemClick}
				handleCloneItem={props.handleCloneItem}
				handleDeleteItem={props.handleDeleteItem}
				handleDeleteRowClick={props.handleDeleteRowClick}
				handleEditItem={props.handleEditItem}
				handleMouse={props.handleMouseEvent}
				handleScroll={props.handleScrollEvent}
				items={props.row.items}
				modsInfo={props.modsInfo}
				overflowBehavior={props.row.overflowBehavior}
				rowId={props.row.id}
			/>
		</div>
	</div>
);

Row.displayName = 'Row';

export default Row;
