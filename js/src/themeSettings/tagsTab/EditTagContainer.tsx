import EditTag from './EditTag';
import React from 'react';
import { Tag as TagType } from '../../types';

interface Props {
	handleCancel: () => void;
	handleEditFinished: (tag: TagType) => void;
	initialProperties: TagType;
	thumbUrls: string[];
}

const EditTagContainer: React.FC<Props> = (props: Props) => {
	const [color, setColor] = React.useState(props.initialProperties.color);
	const [errorMessage, setErrorMessage] = React.useState('');
	const [name, setName] = React.useState(props.initialProperties.name);
	const [thumbsModalIsOpen, setThumbsModalIsOpen] = React.useState(false);
	const [thumbUrl, setThumbUrl] = React.useState(props.initialProperties.thumbUrl);
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.currentTarget.value);
	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setColor(e.currentTarget.value);
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.handleCancel();
	};
	const handleDone = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setErrorMessage('');
		if (!name) {
			setErrorMessage('Name is required');
			return;
		}
		props.handleEditFinished({ color, id: props.initialProperties.id, name, thumbUrl });
	};
	const clearErrorMessage = () => setErrorMessage('');

	return (
		<EditTag
			clearErrorMessage={clearErrorMessage}
			color={color}
			errorMessage={errorMessage}
			handleCancel={handleCancel}
			handleColorChange={handleColorChange}
			handleDone={handleDone}
			handleNameChange={handleNameChange}
			name={name}
			setThumbUrl={setThumbUrl}
			setThumbsModalIsOpen={setThumbsModalIsOpen}
			thumbUrl={thumbUrl}
			thumbUrls={props.thumbUrls}
			thumbsModalIsOpen={thumbsModalIsOpen}
		/>
	);
};

export default EditTagContainer;
