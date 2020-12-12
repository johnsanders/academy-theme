import React from 'react';
import { Tag } from '../../types';
import Tags from './Tags';
import { v4 as uuid } from 'uuid';

const defaultColor = '#D0D0D0';

interface Props {
	setTags: (tags: Tag[]) => void;
	tags: Tag[];
}

const TagsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [errorMessage, setErrorMessage] = React.useState('');
	const [color, setColor] = React.useState(defaultColor);
	const [name, setName] = React.useState('');
	const handleAddTag = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setErrorMessage('');
		if (!name) {
			setErrorMessage('Tag name is required.');
			return;
		}
		if (props.tags.find((tag) => tag.name === name)) return;
		props.setTags([...props.tags, { color, id: uuid(), name }]);
		setName('');
		setColor(defaultColor);
	};
	const handleDeleteTag = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		const tagToDelete = props.tags.find((tag) => tag.id === id);
		if (!tagToDelete) throw new Error('Cannot find tag to delete');
		props.setTags(props.tags.filter((tag) => tag.id !== tagToDelete.id));
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setName(e.currentTarget.value);
	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setColor(e.currentTarget.value);
	const clearErrorMessage = () => setErrorMessage('');
	return (
		<Tags
			clearErrorMessage={clearErrorMessage}
			errorMessage={errorMessage}
			handleAddTag={handleAddTag}
			handleColorChange={handleColorChange}
			handleDeleteTag={handleDeleteTag}
			handleNameChange={handleNameChange}
			selectedColor={color}
			selectedName={name}
			tags={props.tags}
		/>
	);
};

export default TagsContainer;
