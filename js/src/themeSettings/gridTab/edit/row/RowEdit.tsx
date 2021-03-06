import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { Course } from '../../../../types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RowEditRequiredCourses from './RowEditRequiredCourses';

interface Props {
	allCourses: Course[];
	handleSaveRow: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleAddRequiredCourse: (courseId: string) => void;
	handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	name: string;
	overflowBehavior: string;
	requiredCourses: string[];
}

const RowEdit: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h2>Edit Row</h2>
		<div className="form-group">
			<label htmlFor="rowName">Name</label>
			<input
				className="form-control"
				data-id="setName"
				id="rowName"
				onChange={props.handleInputChange}
				value={props.name}
			/>
		</div>
		<div className="form-group">
			<label htmlFor="rowOverflowBehavior">Overflow behavior</label>
			<select
				className="form-control"
				data-id="setOverflowBehavior"
				id="rowOverflowBehavior"
				onChange={props.handleInputChange}
				value={props.overflowBehavior}
			>
				<option value="scroll">Scroll</option>
				<option value="wrap">Wrap</option>
			</select>
		</div>
		<RowEditRequiredCourses
			allCourses={props.allCourses}
			handleAddRequiredCourse={props.handleAddRequiredCourse}
			requiredCourses={props.requiredCourses}
		/>
		<div className="form-group mt-2">
			<button className="btn btn-secondary mr-1" onClick={props.handleSaveRow}>
				<Icon className="mr-1" icon={faCheck} />
				Done
			</button>
			<button className="btn btn-secondary" onClick={props.handleCancel}>
				<Icon className="mr-1" icon={faTimes} />
				Cancel
			</button>
		</div>
	</>
);

export default RowEdit;
