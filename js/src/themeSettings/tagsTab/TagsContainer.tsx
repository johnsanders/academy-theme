import EditTagContainer from './EditTagContainer';
import React from 'react';
import { Tag } from '../../types';
import Tags from './Tags';
import createBlankTag from './createBlankTag';
import disableSaveButtons from '../disableSaveButtons';

interface Props {
	setTags: (tags: Tag[]) => void;
	tags: Tag[];
	thumbUrls: string[];
}

const TagsContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeTag, setActiveTag] = React.useState<Tag | null>(null);
	const handleAddTagClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setActiveTag(createBlankTag());
		disableSaveButtons(true);
	};
	const handleEditClick = (id: string): void => {
		const tagToEdit = props.tags.find((tag) => tag.id === id);
		if (tagToEdit) setActiveTag(tagToEdit);
		disableSaveButtons(true);
	};
	const handleEditFinished = (newTag: Tag): void => {
		const existingTag = props.tags.find((tag) => tag.id === newTag.id);
		if (existingTag) props.setTags(props.tags.map((tag) => (tag.id === newTag.id ? newTag : tag)));
		else props.setTags([...props.tags, newTag]);
		setActiveTag(null);
		disableSaveButtons(false);
	};
	const handleCancelEdit = (): void => {
		setActiveTag(null);
		disableSaveButtons(false);
	};
	const handleDeleteClick = (id: string): void => {
		const tagToDelete = props.tags.find((tag) => tag.id === id);
		if (!tagToDelete) throw new Error('Cannot find tag to delete');
		props.setTags(props.tags.filter((tag) => tag.id !== tagToDelete.id));
	};
	return activeTag ? (
		<EditTagContainer
			handleCancel={handleCancelEdit}
			handleEditFinished={handleEditFinished}
			initialProperties={activeTag}
			thumbUrls={props.thumbUrls}
		/>
	) : (
		<Tags
			handleAddTagClick={handleAddTagClick}
			handleDeleteClick={handleDeleteClick}
			handleEditClick={handleEditClick}
			tags={props.tags}
		/>
	);
};

export default TagsContainer;
