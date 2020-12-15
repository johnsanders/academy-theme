import EditInstructorContainer from './EditInstructorContainer';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Instructor } from '../../types';
import InstructorsTable from './InstructorsTable';
import React from 'react';
import createBlankInstructor from './createBlankInstructor';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	instructors: Instructor[];
	setInstructors: (instructors: Instructor[]) => void;
}

const Instructors: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeInstructor, setActiveInstructor] = React.useState<Instructor | null>(null);
	const handleEditFinished = (newInstructor: Instructor): void => {
		const instructorToUpdate = props.instructors.find(
			(instructor) => instructor.id === newInstructor.id,
		);
		if (instructorToUpdate) {
			const newInstructors = props.instructors.map((instructor) =>
				instructor.id === instructorToUpdate.id ? newInstructor : instructor,
			);
			props.setInstructors(newInstructors);
		} else {
			props.setInstructors([...props.instructors, newInstructor]);
		}
		setActiveInstructor(null);
	};
	const handleEdit = (id: string): void => {
		const instructorToEdit = props.instructors.find((instructor) => instructor.id === id);
		if (instructorToEdit) setActiveInstructor(instructorToEdit);
	};
	const handleDelete = (id: string): void => {
		const newInstructors = props.instructors.filter((instructor) => instructor.id !== id);
		props.setInstructors(newInstructors);
	};
	const handleAddInstructorClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setActiveInstructor(createBlankInstructor());
	};
	const handleEditCancel = (): void => setActiveInstructor(null);
	return (
		<>
			{activeInstructor ? (
				<EditInstructorContainer
					handleCancel={handleEditCancel}
					handleEditFinished={handleEditFinished}
					initialProperties={activeInstructor}
				/>
			) : (
				<>
					<button className="btn btn-secondary mb-3" onClick={handleAddInstructorClick}>
						<Icon className="mr-1" icon={faPlusCircle} />
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
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							instructors={props.instructors}
						/>
					)}
				</>
			)}
		</>
	);
};

export default Instructors;
