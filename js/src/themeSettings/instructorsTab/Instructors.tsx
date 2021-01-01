import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Instructor } from '../../types';
import InstructorsTable from './InstructorsTable';
import React from 'react';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleAddInstructorClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEdit: (id: string) => void;
	handleDelete: (id: string) => void;
	instructors: Instructor[];
	setInstructors: (instructors: Instructor[]) => void;
}

const Instructors: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<button className="btn btn-secondary mb-3" onClick={props.handleAddInstructorClick}>
			<Icon className="mr-1" icon={faPlus} />
			Add an Instructor
		</button>
		<div
			className="card-header pt-2 pb-0"
			style={{
				border: '1px solid rgba(0,0,0,.125)',
				borderBottom: '1px solid rgba(0,0,0,.03)',
			}}
		>
			<h4>Existing Instructors</h4>
		</div>
		{props.instructors.length === 0 ? (
			<div className="text-muted">No instructors to display.</div>
		) : (
			<InstructorsTable
				handleDelete={props.handleDelete}
				handleEdit={props.handleEdit}
				instructors={props.instructors}
			/>
		)}
	</>
);

export default Instructors;
