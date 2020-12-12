import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tag as TagType } from '../../types';
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons';

import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	tag: TagType;
	handleDelete: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	showDeleteButton?: boolean;
}

const Tag: React.FC<Props> = (props: Props): JSX.Element => (
	<span
		style={{
			backgroundColor: props.tag.color,
			color: getForegroundColor(props.tag.color),
		}}
	>
		{props.tag.name}
		{props.showDeleteButton && (
			<a
				className="academyTagDeleteBtn"
				data-id={props.tag.id}
				href="#"
				onClick={props.handleDelete}
			>
				<Icon className="ml-2" icon={faTimesCircle} />
			</a>
		)}
	</span>
);
export default Tag;
