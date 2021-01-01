import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Tag from './Tag';
import { Tag as TagType } from '../../types';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleAddTagClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteClick: (id: string) => void;
	handleEditClick: (id: string) => void;
	tags: TagType[];
}

const Tags: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<button className="btn btn-secondary mb-3" onClick={props.handleAddTagClick}>
			<Icon className="mr-1" icon={faPlus} />
			Add a Tag
		</button>
		<div className="card">
			<div className="card-header pt-2 pb-0">
				<h4>Existing Tags</h4>
			</div>
			<div className="card-body">
				{props.tags.length === 0 ? <div className="text-muted">No tags to display.</div> : null}
				<div className="academyTagsContainer">
					{props.tags.map((tag) => (
						<Tag
							handleDeleteClick={props.handleDeleteClick}
							handleEditClick={props.handleEditClick}
							key={tag.id}
							showButtons={true}
							tag={tag}
						/>
					))}
				</div>
			</div>
		</div>
	</>
);

export default Tags;
