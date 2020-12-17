import { Config, Row, RowItem } from '../../types';
import EditItemContainer from './edit/EditItemContainer';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RowEditContainer from './edit/RowEditContainer';
import RowsContainer from './RowsContainer';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	activeItem: RowItem | null;
	activeRow: Row | null;
	cancelEdit: () => void;
	config: Config;
	handleAddItemToRow: (rowId: string) => void;
	handleAddRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRowClick: (id: string) => void;
	handleReorderRow: (rowId: string, from: number, to: number) => void;
	handleSaveItem: (item: RowItem) => void;
	handleSaveRow: (newRow: Row) => void;
}

const Grid: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		{!props.activeRow && !props.activeItem ? (
			<>
				<RowsContainer
					handleAddItemToRow={props.handleAddItemToRow}
					handleDeleteItem={props.handleDeleteItem}
					handleDeleteRow={props.handleDeleteRow}
					handleEditItem={props.handleEditItem}
					handleEditRowClick={props.handleEditRowClick}
					handleReorderRow={props.handleReorderRow}
					handleSaveRow={props.handleSaveRow}
					rows={props.config.rows}
				/>
				<div>
					<button className="btn btn-secondary" onClick={props.handleAddRowClick}>
						<Icon className="mr-1" icon={faPlus} />
						Add a Row
					</button>
				</div>
			</>
		) : null}
		{props.activeRow && !props.activeItem ? (
			<RowEditContainer
				handleCancel={props.cancelEdit}
				handleSaveRow={props.handleSaveRow}
				initialValues={props.activeRow}
			/>
		) : null}
		{props.activeRow && props.activeItem ? (
			<EditItemContainer
				activeItem={props.activeItem}
				activeRow={props.activeRow}
				allInstructors={props.config.instructors}
				allTags={props.config.tags}
				cancelEdit={props.cancelEdit}
				handleSave={props.handleSaveItem}
			/>
		) : null}
	</>
);

export default Grid;
