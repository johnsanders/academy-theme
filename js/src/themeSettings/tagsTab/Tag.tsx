import { faEdit, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tag as TagType } from '../../types';

import getForegroundColor from '../../helpers/getForegroundColor';

interface Props {
	tag: TagType;
	handleDeleteClick: (id: string) => void;
	handleEditClick: (id: string) => void;
	showButtons?: boolean;
}

const Tag: React.FC<Props> = (props: Props): JSX.Element => {
	const handleEditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const id = e.currentTarget.dataset.id;
		if (id) props.handleEditClick(id);
	};
	const handleDeleteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const id = e.currentTarget.dataset.id;
		if (id) props.handleDeleteClick(id);
	};
	return (
		<span
			style={{
				backgroundColor: props.tag.color,
				color: getForegroundColor(props.tag.color),
			}}
		>
			{props.tag.name}
			{props.showButtons && (
				<>
					<a className="academyTagBtn" data-id={props.tag.id} href="#" onClick={handleEditClick}>
						<Icon className="ml-2" icon={faEdit} />
					</a>
					<a className="academyTagBtn" data-id={props.tag.id} href="#" onClick={handleDeleteClick}>
						<Icon className="ml-2" icon={faTimes} />
					</a>
				</>
			)}
		</span>
	);
};
export default Tag;
