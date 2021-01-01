import EditInstructor from './EditInstructor';
import ImagesModal from '../ImagesModal';
import { Instructor } from '../../types';
import React from 'react';

export const roles = ['Instructor', 'Speaker', 'Special Guest', 'Contributor'];

interface Props {
	handleCancel: () => void;
	handleEditFinished: (instructor: Instructor) => void;
	initialProperties: Instructor;
}

const EditInstructorContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [avatarUrl, setAvatarUrl] = React.useState(props.initialProperties.avatarUrl);
	const [bioUrl, setBioUrl] = React.useState(props.initialProperties.bioUrl);
	const [errorMessage, setErrorMessage] = React.useState('');
	const [name, setName] = React.useState(props.initialProperties.name);
	const [imageModalIsOpen, setImageModalIsOpen] = React.useState(false);
	const [role, setRole] = React.useState(props.initialProperties.role);
	const updaters = { setBioUrl, setName, setRole };
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const updaterName = e.currentTarget.dataset.id;
		if (!updaterName) throw new Error('Cannot get updater');
		updaters[updaterName](e.currentTarget.value);
	};
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.handleCancel();
	};
	const handleDone = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setErrorMessage('');
		if (!avatarUrl || !bioUrl || !name) {
			setErrorMessage('All fields are required');
			return;
		}
		props.handleEditFinished({ avatarUrl, bioUrl, id: props.initialProperties.id, name, role });
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
			<EditInstructor
				avatarUrl={avatarUrl}
				bioUrl={bioUrl}
				clearErrorMessage={clearErrorMessage}
				errorMessage={errorMessage}
				handleCancel={handleCancel}
				handleDone={handleDone}
				handleInputChange={handleInputChange}
				handleOpenImageModal={handleOpenImageModal}
				imageModalIsOpen={imageModalIsOpen}
				name={name}
				role={role}
				roles={roles}
			/>
			{!imageModalIsOpen ? null : (
				<ImagesModal
					handleImageClick={handleAvatarClick}
					imageUrls={cnnAcademy.avatarUrls}
					setIsOpen={setImageModalIsOpen}
				/>
			)}
		</>
	);
};

export default EditInstructorContainer;
