import React from 'react';
import { Tag } from '../../types';

interface Props {
	className?: string;
	tag: Tag;
}

const Collection: React.FC<Props> = (props: Props) => (
	<div className={`gridRowCollection ${props.className || ''}`}>
		<img src={props.tag.thumbUrl} />
	</div>
);

export default Collection;
