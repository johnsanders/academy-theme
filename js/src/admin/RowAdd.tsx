import { faPlusCircle, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	formOpen: boolean;
	handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleAddRequiredCourse: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOpenForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
	name: string;
	requiredCourses: string[];
	requiredCourse: string;
}

const RowAdd: React.FC<Props> = (props: Props): JSX.Element =>
	!props.formOpen ? (
		<div className="form-group">
			<button className="btn btn-secondary" onClick={props.handleOpenForm}>
				Add a Row
			</button>
		</div>
	) : (
		<>
			<h2>Add a Row</h2>
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
				<label htmlFor="requiredCourseIds">Required Course IDs</label>
				<div className="input-group">
					<input
						className="form-control"
						data-id="setRequiredCourse"
						id="requiredCourseIds"
						onChange={props.handleInputChange}
						value={props.requiredCourse}
					/>
					<div className="input-group-append">
						<button className="btn btn-secondary" onClick={props.handleAddRequiredCourse}>
							Add
						</button>
					</div>
				</div>
				<div className="mt-2">
					{props.requiredCourses.length === 0 ? (
						<span className="text-muted">No required course IDs have been added.</span>
					) : (
						<span>
							<strong>Courses added: </strong>
							{props.requiredCourses.join(', ')}
						</span>
					)}
				</div>
			</div>
			<div className="form-group">
				<button className="btn btn-secondary mr-1" onClick={props.handleAdd}>
					<Icon className="mr-1" icon={faPlusCircle} />
					Add Row
				</button>
				<button className="btn btn-secondary" onClick={props.handleCancel}>
					<Icon className="mr-1" icon={faTimes} />
					Cancel
				</button>
			</div>
		</>
	);

export default RowAdd;
