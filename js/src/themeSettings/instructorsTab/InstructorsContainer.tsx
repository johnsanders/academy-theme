import EditInstructorContainer from './EditInstructorContainer';
import { Instructor } from '../../types';
import Instructors from './Instructors';
import React from 'react';
import createBlankInstructor from './createBlankInstructor';
import disableSaveButtons from '../disableSaveButtons';

interface Props {
	instructors: Instructor[];
	setInstructors: (instructors: Instructor[]) => void;
}

const InstructorsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeInstructor, setActiveInstructor] = React.useState<Instructor | null>(null);
	const handleAddInstructorClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setActiveInstructor(createBlankInstructor());
		disableSaveButtons(true);
	};
	const handleEdit = (id: string): void => {
		const instructorToEdit = props.instructors.find((instructor) => instructor.id === id);
		if (instructorToEdit) setActiveInstructor(instructorToEdit);
		disableSaveButtons(true);
	};
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
		disableSaveButtons(false);
	};
	const handleEditCancel = (): void => {
		setActiveInstructor(null);
		disableSaveButtons(false);
	};
	const handleDelete = (id: string): void => {
		const newInstructors = props.instructors.filter((instructor) => instructor.id !== id);
		props.setInstructors(newInstructors);
	};
	return activeInstructor ? (
		<EditInstructorContainer
			handleCancel={handleEditCancel}
			handleEditFinished={handleEditFinished}
			initialProperties={activeInstructor}
		/>
	) : (
		<Instructors
			handleAddInstructorClick={handleAddInstructorClick}
			handleDelete={handleDelete}
			handleEdit={handleEdit}
			instructors={props.instructors}
			setInstructors={props.setInstructors}
		/>
	);
};

export default InstructorsContainer;
