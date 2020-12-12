import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Tag from '../tagsTab/Tag';
import { Tag as TagType } from '../../types';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	allTags: TagType[];
	tags: string[];
	updateTags: (newTags: string[]) => void;
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
		props.updateTags([...props.tags, selectedTag.id]);
	};
	const handleDeleteTag = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		const idToDelete = e.currentTarget.dataset.id;
		props.updateTags(props.tags.filter((tagId) => tagId !== idToDelete));
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
					{props.tags.map((tagId) => {
						console.log(tagId);
						const tag = props.allTags.find((tag) => tag.id === tagId);
						return tag ? (
							<Tag handleDelete={handleDeleteTag} key={tagId} showDeleteButton={true} tag={tag} />
						) : null;
					})}
				</div>
			)}
		</>
	);
};

export default EditItemTags;
