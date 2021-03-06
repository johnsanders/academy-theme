import { Course, Instructor, Module, Row, RowItem, Tag } from '../../../types';
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import EditItemDatesContainer from '../../../modEdit/dates/EditItemDatesContainer';
import EditItemDuration from '../../../modEdit/EditItemDuration';
import EditItemInstructors from '../../../modEdit/EditItemInstructors';
import EditItemModule from './module/EditItemModule';
import EditItemTags from './EditItemTags';
import EditItemThumbnail from './editItemThumbnail';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { UpdateDateArgs } from './EditItemContainer';

interface Props {
	activeRow: Row;
	allInstructors: Instructor[];
	allTags: Tag[];
	cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
	clearErrorMessage: () => void;
	courses: Course[];
	errorMessage: string;
	newItem: RowItem;
	saveItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
	thumbUrls: string[];
	updateDate: (args: UpdateDateArgs) => void;
	updateDuration: (duration: string) => void;
	updateInstructors: (instructors: string[]) => void;
	updateModule: (module: Module) => void;
	updateTags: (tags: string[]) => void;
	updateThumb: (thumbUrl: string) => void;
}

const EditItem: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h2>Edit Grid Item</h2>
		<EditItemModule
			className="mb-3"
			courses={props.courses}
			itemsAlreadyInRow={props.activeRow.items}
			onFocus={props.clearErrorMessage}
			selectedItem={props.newItem}
			updateModule={props.updateModule}
		/>
		<EditItemDatesContainer
			className="mb-3"
			displayed={props.newItem.dateDisplayed}
			end={props.newItem.dateEnd}
			start={props.newItem.dateStart}
			updateDate={props.updateDate}
		/>
		<EditItemInstructors
			allInstructors={props.allInstructors}
			className="mb-3"
			instructors={props.newItem.instructors}
			updateInstructors={props.updateInstructors}
		/>
		<EditItemTags
			allTags={props.allTags}
			className="mb-3"
			tags={props.newItem.tags}
			updateTags={props.updateTags}
		/>
		<EditItemDuration
			className="mb-3"
			duration={props.newItem.duration}
			updateDuration={props.updateDuration}
		/>
		<EditItemThumbnail
			className="mb-3"
			thumbUrl={props.newItem.thumbUrl}
			thumbUrls={props.thumbUrls}
			updateThumb={props.updateThumb}
		/>
		<div>
			<button className="btn btn-secondary mr-1" onClick={props.saveItem}>
				<Icon className="mr-1" icon={faCheck} />
				Done
			</button>
			<button className="btn btn-secondary mr-3" onClick={props.cancelEdit}>
				<Icon className="mr-1" icon={faTimes} />
				Cancel
			</button>
			<span className="text-error">{props.errorMessage}</span>
		</div>
	</>
);

export default EditItem;
