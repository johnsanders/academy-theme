import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import Collection from '../../Collection';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tag } from '../../../../types';

interface Props {
	availableTags: Tag[];
	handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSaveCollectionRow: (e: React.MouseEvent<HTMLButtonElement>) => void;
	tags: Tag[];
}

const CollectionRow: React.FC<Props> = (props: Props) => (
	<div className="card">
		<div className="card-header">
			<h2>Edit Collection Row</h2>
		</div>
		<div className="card-body">
			<div className="form-group">
				<h4>Add Tags</h4>
				<div className="d-flex flex-wrap">
					{props.availableTags.map((tag) => (
						<Collection key={tag.id} tag={tag} />
					))}
				</div>
			</div>
			<div className="form-group">
				<button className="btn btn-secondary mr-1" onClick={props.handleSaveCollectionRow}>
					<Icon className="mr-1" icon={faCheck} />
					Done
				</button>
				<button className="btn btn-secondary" onClick={props.handleCancel}>
					<Icon className="mr-1" icon={faTimes} />
					Cancel
				</button>
			</div>
		</div>
	</div>
);

export default CollectionRow;
