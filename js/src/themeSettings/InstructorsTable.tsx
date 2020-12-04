import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Instructor } from '../types';
import React from 'react';
import { faTrash } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleDelete: (id: string) => void;
	instructors: Instructor[];
}

const InstructorsTable: React.FC<Props> = (props: Props) => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		if (!id) throw new Error('Cannot get id to delete');
		props.handleDelete(id);
	};
	return (
		<table className="table table-striped table-bordered instructorsTable">
			<thead>
				<tr>
					<th>Avatar</th>
					<th>Name</th>
					<th>Role</th>
					<th>Bio Link</th>
					<th style={{ width: '5em' }}>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.instructors.map((instructor) => (
					<tr key={instructor.id}>
						<td className="text-center">
							<img className="avatar" src={instructor.avatarUrl} />
						</td>
						<td>{instructor.name}</td>
						<td>{instructor.role}</td>
						<td>
							<a href={instructor.bioUrl}>{instructor.bioUrl}</a>
						</td>
						<td className="text-center">
							<button
								className="btn btn-sm btn-secondary"
								data-id={instructor.id}
								onClick={handleDelete}
							>
								<Icon className="mr-1" icon={faTrash} />
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default InstructorsTable;
