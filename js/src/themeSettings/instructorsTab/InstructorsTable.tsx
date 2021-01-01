import { faPencil, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Instructor } from '../../types';
import React from 'react';

interface Props {
	handleDelete: (id: string) => void;
	handleEdit: (id: string) => void;
	instructors: Instructor[];
}

const InstructorsTable: React.FC<Props> = (props: Props) => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		if (id) props.handleDelete(id);
	};
	const handleEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault;
		const id = e.currentTarget.dataset.id;
		if (id && props.handleEdit) props.handleEdit(id);
	};
	return (
		<table className="table table-striped table-bordered instructorsTable mb-0">
			<thead>
				<tr>
					<th className="text-center" style={{ width: '10%' }}>
						Avatar
					</th>
					<th style={{ width: '20%' }}>Name</th>
					<th style={{ width: '20%' }}>Role</th>
					<th style={{ width: '30%' }}>Bio Link</th>
					<th className="text-center" style={{ width: '20%' }}>
						Actions
					</th>
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
								className="btn btn-sm btn-secondary mr-1 mb-1"
								data-id={instructor.id}
								onClick={handleEdit}
							>
								<Icon className="mr-1" icon={faPencil} />
								Edit
							</button>
							<button
								className="btn btn-sm btn-secondary mb-1"
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
