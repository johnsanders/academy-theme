import { MoodleAcademySettings, Row, RowItem as RowItemType } from '../../types';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react';
import RowItemSortable from './RowItemSortable';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleMoveItemToRow: (temId: string, rowFromId: string, rowToId: string) => void;
	handleScroll: () => void;
	items: RowItemType[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	overflowBehavior: string;
	rowId: string;
	rows: Row[];
}

const RowItems: React.FC<Props> = (props: Props): JSX.Element => (
	<div
		onMouseEnter={props.handleMouse}
		onMouseLeave={props.handleMouse}
		ref={(el) => {
			if (el) {
				const itemsContainer = el.querySelector<HTMLDivElement>('.gridRowItems');
				if (itemsContainer) props.containerRef.current = itemsContainer;
			}
		}}
	>
		<div
			className={`gridRowItems gridRowItems_${props.overflowBehavior}`}
			onScroll={props.handleScroll}
		>
			<SortableContext
				items={props.items.map((item) => item.id)}
				strategy={horizontalListSortingStrategy}
			>
				{props.items.length === 0 ? (
					<div className="text-muted my-2">No items to show in this row.</div>
				) : null}
				{props.items.map((item) => (
					<RowItemSortable
						handleCloneItem={props.handleCloneItem}
						handleDeleteItem={props.handleDeleteItem}
						handleEditItem={props.handleEditItem}
						handleMoveToRow={props.handleMoveItemToRow}
						item={item}
						key={item.id}
						modsInfo={props.modsInfo}
						rowId={props.rowId}
						rows={props.rows}
					/>
				))}
			</SortableContext>
		</div>
	</div>
);

export default RowItems;
