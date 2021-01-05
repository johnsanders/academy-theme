import CollectionRowEdit from './CollectionRowEdit';
import { DropResult } from 'react-beautiful-dnd';
import React from 'react';
import { Tag } from '../../../../types';
import arrayMove from 'array-move';

interface Props {
	allTags: Tag[];
	handleCancel: () => void;
	handleSaveCollectionRow: (collectionRow: Tag[]) => void;
	initialValues: Tag[];
}

const CollectionRowEditContainer: React.FC<Props> = (props: Props) => {
	const [tags, setTags] = React.useState(props.initialValues);
	const handleAddTag = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		const newTag = props.allTags.find((tag) => tag.id === id);
		if (!newTag) throw new Error('Cannot get new tag');
		setTags([...tags, newTag]);
	};
	const handleDeleteTag = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const idToDelete = e.currentTarget.dataset.id;
		const newTags = tags.filter((tag) => tag.id !== idToDelete);
		setTags(newTags);
	};
	const handleDragEnd = (result: DropResult): void => {
		if (!result.destination) return;
		setTags(arrayMove(tags, result.source.index, result.destination.index));
	};
	const handleSaveCollectionRow = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.handleSaveCollectionRow(tags);
	};
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.handleCancel();
	};
	const availableTags = props.allTags.filter((tag) => !tags.includes(tag));
	return (
		<CollectionRowEdit
			availableTags={availableTags}
			handleAddTag={handleAddTag}
			handleCancel={handleCancel}
			handleDeleteTag={handleDeleteTag}
			handleDragEnd={handleDragEnd}
			handleSaveCollectionRow={handleSaveCollectionRow}
			tags={tags}
		/>
	);
};

export default CollectionRowEditContainer;
