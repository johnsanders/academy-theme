import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	containerClientWidth: number;
	containerScrollWidth: number;
	isWrapped: boolean;
	overflowBehavior: string;
	setOverflowBehavior: (overflowBehavior: string) => void;
}

const RowExpandButton: React.FC<Props> = (props: Props) => {
	if (
		(props.overflowBehavior === 'scroll' &&
			props.containerScrollWidth <= props.containerClientWidth) ||
		(props.overflowBehavior === 'wrap' && !props.isWrapped)
	)
		return null;
	const icon = props.overflowBehavior === 'scroll' ? faPlus : faMinus;
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		return props.setOverflowBehavior(props.overflowBehavior === 'scroll' ? 'wrap' : 'scroll');
	};
	return (
		<button className="btn btn-lg" onClick={handleClick}>
			<Icon icon={icon} />
		</button>
	);
};

export default RowExpandButton;
