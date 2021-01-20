import { MoodleAcademySettings, Row as RowType } from '../../types';
import { faArrowsV, faPencil, faPlus, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
	handleMoveItemToRow: (itemId: string, rowFromId: string, rowToId: string) => void;
	handleScrollEvent: () => void;
	handleScrollClick: (direction: string) => void;
	hovered: boolean;
	modsInfo: MoodleAcademySettings['modsInfo'];
	row: RowType;
	rows: RowType[];
}

const Row: React.FC<Props> = (props: Props): JSX.Element => (
	<div className="mb-4" data-id={props.row.id}>
		<div className="d-flex align-items-center justify-content-between">
			<h4 className="w-50" style={{ borderBottom: 'none' }}>
				{props.row.name}
			</h4>
			<span>
				<button
					className="btn btn-secondary btn-sm mr-2 mb-1"
					data-id={props.row.id}
					onClick={props.handleAddItemClick}
				>
					<Icon className="mr-1" icon={faPlus} />
					Add Item
				</button>
				<button
					className="btn btn-secondary btn-sm mr-2 mb-1"
					data-id={props.row.id}
					onClick={props.handleEditRowClick}
				>
					<Icon className="mr-1" icon={faPencil} />
					Edit Row
				</button>
				<button
					className="btn btn-secondary btn-sm mr-2 mb-1"
					data-id={props.row.id}
					onClick={props.handleDeleteRowClick}
				>
					<Icon className="mr-1" icon={faTrash} />
					Delete Row
				</button>
				<div className="rowDragHandle d-inline-block bg-secondary btn-sm mb-1">
					<Icon className="mr-1" icon={faArrowsV} />
					Reorder
				</div>
			</span>
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
				handleMoveItemToRow={props.handleMoveItemToRow}
				handleScroll={props.handleScrollEvent}
				items={props.row.items}
				modsInfo={props.modsInfo}
				overflowBehavior={props.row.overflowBehavior}
				rowId={props.row.id}
				rows={props.rows}
			/>
		</div>
	</div>
);

export default Row;
