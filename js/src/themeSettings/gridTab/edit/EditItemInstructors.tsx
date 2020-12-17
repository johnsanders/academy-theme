import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Instructor } from '../../../types';
import InstructorsTable from '../../instructorsTab/InstructorsTable';
import React from 'react';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	allInstructors: Instructor[];
	className?: string;
	instructors: string[];
	updateInstructors: (instructors: string[]) => void;
}

const EditItemInstructors: React.FC<Props> = (props: Props): JSX.Element => {
	const [selectedInstructor, setSelectedInstructor] = React.useState<Instructor | undefined>(
		props.allInstructors[0],
	);
	const handleInstructorChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const selectedInstructor = props.allInstructors.find(
			(instructor) => instructor.id === e.currentTarget.value,
		);
		if (!selectedInstructor) throw new Error('Cannot find selected instructor');
		setSelectedInstructor(selectedInstructor);
	};
	const handleAddInstructor = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (!selectedInstructor) throw new Error('No instructor selected');
		if (props.instructors.find((instructorId) => instructorId === selectedInstructor.id)) return;
		props.updateInstructors([...props.instructors, selectedInstructor.id]);
	};
	const handleDeleteInstructor = (idToDelete: string): void => {
		const newInstructors = props.instructors.filter((instructorId) => instructorId !== idToDelete);
		props.updateInstructors(newInstructors);
	};
	return (
		<div className={`card ${props.className || ''}`}>
			<div className="card-header pt-2 pb-0">
				<h4>Instructors</h4>
			</div>
			<div className="card-body">
				<div className="form-group">
					{props.allInstructors.length === 0 ? (
						<span className="text-muted">No instructors have been created.</span>
					) : (
						<>
							<h5>Instructor Name</h5>
							<select
								className="form-control"
								id="instructors"
								onChange={handleInstructorChange}
								value={selectedInstructor?.id}
							>
								{props.allInstructors.map((instructor) => (
									<option key={instructor.id} value={instructor.id}>
										{instructor.name}
									</option>
								))}
							</select>
							<button className="btn btn-sm btn-secondary mt-1" onClick={handleAddInstructor}>
								<Icon className="mr-1" icon={faPlusCircle} />
								Add
							</button>
						</>
					)}
				</div>
				<div>
					<h5>Assigned Instructors</h5>
					{props.instructors.length === 0 ? (
						<div className="form-group text-muted mb-0">
							This module has no instructors assigned.
						</div>
					) : (
						<InstructorsTable
							handleDelete={handleDeleteInstructor}
							instructors={props.allInstructors.filter((instructor) =>
								props.instructors.includes(instructor.id),
							)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default EditItemInstructors;
