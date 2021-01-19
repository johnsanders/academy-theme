import { Course, Instructor, MoodleAcademySettings, Row, RowItem, Tag } from '../../types';
import CollectionRowEditContainer from './edit/row/CollectionRowEditContainer';
import EditItemContainer from './edit/EditItemContainer';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RowEditContainer from './edit/row/RowEditContainer';
import RowsContainer from './RowsContainer';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	activeCollectionRow: Tag[] | null;
	activeItem: RowItem | null;
	activeRow: Row | null;
	cancelEdit: () => void;
	courses: Course[];
	handleAddItemToRow: (rowId: string) => void;
	handleAddCollectionRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleAddRowClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	handleEditRowClick: (id: string) => void;
	handleReorderRows: (from: number, to: number) => void;
	handleSaveCollectionRow: (collectionRow: Tag[]) => void;
	handleSaveItem: (item: RowItem) => void;
	handleSaveRow: (newRow: Row) => void;
	instructors: Instructor[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: Row[];
	setRows: (rows: Row[]) => void;
	tags: Tag[];
	thumbUrls: string[];
}

const Grid: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		{!props.activeRow && !props.activeItem && !props.activeCollectionRow ? (
			<>
				<RowsContainer
					handleAddItemToRow={props.handleAddItemToRow}
					handleEditItem={props.handleEditItem}
					handleEditRowClick={props.handleEditRowClick}
					handleReorderRows={props.handleReorderRows}
					modsInfo={props.modsInfo}
					rows={props.rows}
					setRows={props.setRows}
				/>
				<div>
					<button className="btn btn-secondary" onClick={props.handleAddRowClick}>
						<Icon className="mr-1" icon={faPlus} />
						Add a Module Row
					</button>
					{/*
					<button className="btn btn-secondary" onClick={props.handleAddCollectionRowClick}>
						<Icon className="mr-1" icon={faPlus} />
						Add a Collection Row
					</button>
					*/}
				</div>
			</>
		) : null}

		{props.activeCollectionRow ? (
			<CollectionRowEditContainer
				allTags={props.tags}
				handleCancel={props.cancelEdit}
				handleSaveCollectionRow={props.handleSaveCollectionRow}
				initialValues={props.activeCollectionRow}
			/>
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
