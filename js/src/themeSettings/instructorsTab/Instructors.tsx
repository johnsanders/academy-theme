import { faPlusCircle, faUser } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Instructor } from '../../types';
import InstructorsTable from './InstructorsTable';
import React from 'react';

interface Props {
	avatarUrl: string;
	bioUrl: string;
	clearErrorMessage: () => void;
	errorMessage: string;
	handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDelete: (id: string) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	handleOpenImageModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
	imageModalIsOpen: boolean;
	instructors: Instructor[];
	name: string;
	role: string;
	roles: string[];
}

const Instructors: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h2>Manage Instructors</h2>
		<h3>Add a New Instructor</h3>
		<div className="mb-3">
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					className="form-control"
					data-id="setName"
					id="name"
					onChange={props.handleInputChange}
					onFocus={props.clearErrorMessage}
					value={props.name}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="bioUrl">Bio Link</label>
				<input
					className="form-control"
					data-id="setBioUrl"
					id="bioUrl"
					onChange={props.handleInputChange}
					onFocus={props.clearErrorMessage}
					value={props.bioUrl}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="role">Role</label>
				<select
					className="form-control"
					data-id="setRole"
					id="role"
					onChange={props.handleInputChange}
					value={props.role}
				>
					{props.roles.map((role) => (
						<option key={role} value={role}>
							{role}
						</option>
					))}
				</select>
			</div>
			<div className="form-group">
				<label>Avatar</label>
				{props.avatarUrl === '' ? (
					<div className="text-muted">No avatar selected.</div>
				) : (
					<img className="avatar d-block" src={props.avatarUrl} />
				)}
				<button
					className="btn btn-secondary mt-2"
					onClick={props.handleOpenImageModal}
					onFocus={props.clearErrorMessage}
				>
					<Icon className="mr-1" icon={faUser} />
					Select Avatar
				</button>
			</div>
			<button className="btn btn-secondary mr-3" onClick={props.handleAdd}>
				<Icon className="mr-1" icon={faPlusCircle} />
				Add Instructor to List
			</button>
			<span className="text-error">{props.errorMessage}</span>
		</div>
		<h3>Existing Instructors</h3>
		{props.instructors.length === 0 ? (
			<div className="text-muted">No instructors to display.</div>
		) : (
			<InstructorsTable handleDelete={props.handleDelete} instructors={props.instructors} />
		)}
	</>
);

export default Instructors;
