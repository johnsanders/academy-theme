import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Tag from '../Tag';
import { Tag as TagType } from '../../types';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	allTags: TagType[];
	tags: TagType[];
	updateTags: (newTags: TagType[]) => void;
}

const EditItemTags: React.FC<Props> = (props: Props): JSX.Element => {
	const [selectedTag, setSelectedTag] = React.useState<TagType | undefined>(props.allTags[0]);
	const handleSelectedTagChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const newTag = props.allTags.find((tag) => tag.id === e.currentTarget.value);
		if (!newTag) throw new Error('Cannot find tag');
		setSelectedTag(newTag);
	};
	const handleAddTag = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (!selectedTag) throw new Error('No tag selected');
		props.updateTags([...props.tags, selectedTag]);
	};
	const handleDeleteTag = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		const tagToDelete = props.tags.find((tag) => tag.id === id);
		if (!tagToDelete) throw new Error('Cannot find tag to delete');
		props.updateTags(props.tags.filter((tag) => tag.id !== tagToDelete.id));
	};
	return (
		<>
			<h3>Tags</h3>
			<div className="form-group">
				{props.allTags.length === 0 ? (
					<span className="text-muted">No tags have been created.</span>
				) : (
					<>
						<label htmlFor="tag">Tag Label</label>
						<select
							className="form-control"
							id="tag"
							onChange={handleSelectedTagChange}
							value={selectedTag?.id}
						>
							{props.allTags.map((tag) => (
								<option key={tag.id} value={tag.id}>
									{tag.name}
								</option>
							))}
						</select>
						<button className="btn btn-sm btn-secondary mt-1" onClick={handleAddTag}>
							<Icon className="mr-1" icon={faPlusCircle} />
							Add
						</button>
					</>
				)}
			</div>
			{props.tags.length === 0 ? (
				<div className="form-group text-muted">This module has no tags assigned.</div>
			) : (
				<div className="academyTagsContainer form-group">
					{props.tags.map((tag) => (
						<Tag handleDelete={handleDeleteTag} key={tag.id} showDeleteButton={true} tag={tag} />
					))}
				</div>
			)}
		</>
	);
};

export default EditItemTags;
