import { faCheck, faTimes, faUser } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	avatarUrl: string;
	bioUrl: string;
	clearErrorMessage: () => void;
	errorMessage: string;
	handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	handleOpenImageModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
	imageModalIsOpen: boolean;
	name: string;
	role: string;
	roles: string[];
}

const EditInstructor: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<div className="card my-3">
			<div className="card-header pt-2 pb-0">
				<h4>Edit Instructor</h4>
			</div>
			<div className="card-body">
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
			</div>
		</div>
		<div>
			<button className="btn btn-secondary mr-1" onClick={props.handleAdd}>
				<Icon className="mr-1" icon={faCheck} />
				Done
			</button>
			<button className="btn btn-secondary mr-3" onClick={props.handleCancel}>
				<Icon className="mr-1" icon={faTimes} />
				Cancel
			</button>
			<span className="text-error">{props.errorMessage}</span>
		</div>
	</>
);

export default EditInstructor;
