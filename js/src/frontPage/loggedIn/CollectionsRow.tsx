import React from 'react';
import { Tag } from '../../types';

interface Props {
	tags: Tag[];
}

const CollectionsRow: React.FC<Props> = (props: Props) => (
	<div className="collectionsRow">
		{props.tags.map((tag) => (
			<div className="collectionItem" key={tag.id}>
				{tag.name}
			</div>
		))}
	</div>
);

export default CollectionsRow;
