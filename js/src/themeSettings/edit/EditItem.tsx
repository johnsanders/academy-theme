import { Instructor, Module, Row, RowItem, Tag } from '../../types';
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import EditItemInstructors from './EditItemInstructors';
import EditItemModule from './EditItemModuleContainer';
import EditItemTags from './EditItemTags';
import EditItemThumbnail from './EditItemThumbnail';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	activeRow: Row;
	allInstructors: Instructor[];
	allTags: Tag[];
	cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
	clearErrorMessage: () => void;
	errorMessage: string;
	newItem: RowItem;
	saveItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
	updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	updateInstructors: (instructors: string[]) => void;
	updateModule: (module: Module) => void;
	updateTags: (tags: string[]) => void;
	updateThumb: (thumbUrl: string) => void;
}

const EditItem: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h2>Grid Item</h2>
		<EditItemModule
			itemsAlreadyInRow={props.activeRow.items}
			onFocus={props.clearErrorMessage}
			selectedItemName={props.newItem.name}
			updateModule={props.updateModule}
		/>
		<EditItemInstructors
			allInstructors={props.allInstructors}
			instructors={props.newItem.instructors}
			updateInstructors={props.updateInstructors}
		/>
		<EditItemTags allTags={props.allTags} tags={props.newItem.tags} updateTags={props.updateTags} />
		<div className="form-group">
			<label htmlFor="duration">Duration</label>
			<input
				className="form-control"
				data-id="duration"
				onChange={props.updateInput}
				value={props.newItem.duration}
			/>
		</div>
		<EditItemThumbnail
			onFocus={props.clearErrorMessage}
			thumbUrl={props.newItem.thumbUrl}
			updateThumb={props.updateThumb}
		/>
		<button className="btn btn-secondary mt-2 mr-1" onClick={props.saveItem}>
			<Icon className="mr-1" icon={faCheck} />
			Done
		</button>
		<button className="btn btn-secondary mt-2 mr-3" onClick={props.cancelEdit}>
			<Icon className="mr-1" icon={faTimes} />
			Cancel
		</button>
		<span className="text-error">{props.errorMessage}</span>
	</>
);

export default EditItem;
