import { Course, Instructor, MoodleAcademySettings, Row, RowItem, Tag } from '../../types';
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
	courses: Course[];
	handleAddItemToRow: (rowId: string) => void;
	handleAddRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleDeleteRow: (rowId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRowClick: (id: string) => void;
	handleReorderRow: (rowId: string, from: number, to: number) => void;
	handleSaveItem: (item: RowItem) => void;
	handleSaveRow: (newRow: Row) => void;
	instructors: Instructor[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: Row[];
	tags: Tag[];
	thumbUrls: string[];
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
					modsInfo={props.modsInfo}
					rows={props.rows}
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
				allCourses={props.courses}
				handleCancel={props.cancelEdit}
				handleSaveRow={props.handleSaveRow}
				initialValues={props.activeRow}
			/>
		) : null}
		{props.activeRow && props.activeItem ? (
			<EditItemContainer
				activeItem={props.activeItem}
				activeRow={props.activeRow}
				allInstructors={props.instructors}
				allTags={props.tags}
				cancelEdit={props.cancelEdit}
				courses={props.courses}
				handleSave={props.handleSaveItem}
				thumbUrls={props.thumbUrls}
			/>
		) : null}
	</>
);

export default Grid;
