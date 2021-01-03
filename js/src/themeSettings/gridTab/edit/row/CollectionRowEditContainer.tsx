import CollectionRowEdit from './CollectionRowEdit';
import React from 'react';
import { Tag } from '../../../../types';

interface Props {
	allTags: Tag[];
	handleCancel: () => void;
	handleSaveCollectionRow: (collectionRow: Tag[]) => void;
	initialValues: Tag[];
	updateTags: (tags: Tag[]) => void;
}

const CollectionRowEditContainer: React.FC<Props> = (props: Props) => {
	const [tags, setTags] = React.useState(props.initialValues);
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
			handleCancel={handleCancel}
			handleSaveCollectionRow={handleSaveCollectionRow}
			tags={tags}
		/>
	);
};

export default CollectionRowEditContainer;
