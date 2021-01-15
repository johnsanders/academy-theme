import React from 'react';
import getForegroundColor from '../../helpers/getForegroundColor';
import { getTagById } from '../../shared/getById';

interface Props {
	handleTagClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	tags: string[];
}

const RowItemTags: React.FC<Props> = (props: Props) => (
	<div className="academyTagsContainer">
		{props.tags.map((tagId) => {
			const tag = getTagById(tagId);
			if (!tag) return null;
			return (
				<button
					data-id={tag.id}
					key={tag.id}
					onClick={props.handleTagClick}
					role="button"
					style={{
						backgroundColor: tag.color,
						color: getForegroundColor(tag.color),
					}}
				>
					{tag.name}
				</button>
			);
		})}
	</div>
);

export default RowItemTags;
