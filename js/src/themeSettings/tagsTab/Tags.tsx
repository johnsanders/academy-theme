import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Tag from './Tag';
import { Tag as TagType } from '../../types';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	clearErrorMessage: () => void;
	errorMessage: string;
	selectedColor: string;
	handleAddTag: (e: React.FormEvent<HTMLFormElement>) => void;
	handleDeleteTag: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectedName: string;
	tags: TagType[];
}

const Tags: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h2>Manage Tags</h2>
		<form onSubmit={props.handleAddTag}>
			<h3>Create New Tag</h3>
			<div className="form-group">
				<label htmlFor="name">New Tag Name</label>
				<div className="input-group">
					<input
						className="form-control"
						id="name"
						onChange={props.handleNameChange}
						onFocus={props.clearErrorMessage}
						value={props.selectedName}
					/>
				</div>
			</div>
			<div className="form-group">
				<label>New Tag Color</label>
				<input
					className="form-control"
					onChange={props.handleColorChange}
					style={{ cursor: 'pointer', display: 'block', height: '3em', padding: '5px 8px' }}
					type="color"
					value={props.selectedColor}
				/>
			</div>
			<div className="form-group">
				<button className="btn btn-secondary mr-3">
					<Icon className="mr-1" icon={faPlusCircle} />
					Add Tag to List
				</button>
				<span className="text-error">{props.errorMessage}</span>
			</div>
		</form>
		<div className="form-group">
			<h3>Existing Tags</h3>
			{props.tags.length === 0 ? <div className="text-muted">No tags to display.</div> : null}
			<div className="academyTagsContainer">
				{props.tags.map((tag) => (
					<Tag
						handleDelete={props.handleDeleteTag}
						key={tag.id}
						showDeleteButton={true}
						tag={tag}
					/>
				))}
			</div>
		</div>
	</>
);

export default Tags;
