declare const avatarUrls: string[];
import ImagesModal from './ImagesModal';
import { Instructor } from '../types';
import Instructors from './Instructors';
import React from 'react';
import { v4 as uuid } from 'uuid';

const roles = ['Instructor', 'Speaker', 'Special Guest', 'Contributor'];

interface Props {
	instructors: Instructor[];
	setInstructors: (instructors: Instructor[]) => void;
}

const InstructorsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [avatarUrl, setAvatarUrl] = React.useState('');
	const [bioUrl, setBioUrl] = React.useState('');
	const [errorMessage, setErrorMessage] = React.useState('');
	const [name, setName] = React.useState('');
	const [imageModalIsOpen, setImageModalIsOpen] = React.useState(false);
	const [role, setRole] = React.useState(roles[0]);
	const updaters = { setBioUrl, setName, setRole };
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const updaterName = e.currentTarget.dataset.id;
		if (!updaterName) throw new Error('Cannot get updater');
		updaters[updaterName](e.currentTarget.value);
	};
	const handleAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setErrorMessage('');
		if (!avatarUrl || !bioUrl || !name) {
			setErrorMessage('All fields are required');
			return;
		}
		const newInstructors = [...props.instructors, { avatarUrl, bioUrl, id: uuid(), name, role }];
		setAvatarUrl('');
		setBioUrl('');
		setName('');
		setRole(roles[0]);
		props.setInstructors(newInstructors);
	};
	const handleDelete = (id: string): void => {
		const newInstructors = props.instructors.filter((instructor) => instructor.id !== id);
		props.setInstructors(newInstructors);
	};
	const handleOpenImageModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setImageModalIsOpen(true);
	};
	const handleAvatarClick = (avatarUrl: string): void => {
		setAvatarUrl(avatarUrl);
		setImageModalIsOpen(false);
	};
	const clearErrorMessage = () => setErrorMessage('');
	return (
		<>
			<Instructors
				avatarUrl={avatarUrl}
				bioUrl={bioUrl}
				clearErrorMessage={clearErrorMessage}
				errorMessage={errorMessage}
				handleAdd={handleAdd}
				handleDelete={handleDelete}
				handleInputChange={handleInputChange}
				handleOpenImageModal={handleOpenImageModal}
				imageModalIsOpen={imageModalIsOpen}
				instructors={props.instructors}
				name={name}
				role={role}
				roles={roles}
			/>
			{!imageModalIsOpen ? null : (
				<ImagesModal
					handleImageClick={handleAvatarClick}
					imageUrls={avatarUrls}
					setIsOpen={setImageModalIsOpen}
				/>
			)}
		</>
	);
};

export default InstructorsContainer;
