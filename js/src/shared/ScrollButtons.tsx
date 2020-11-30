import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	containerClientWidth: number;
	containerScrollLeft: number;
	containerScrollWidth: number;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleScroll: (direction: string) => void;
	hovered: boolean;
}

const ScrollButtons: React.FC<Props> = (props: Props): JSX.Element => {
	const handleScrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const direction = e.currentTarget.dataset.direction;
		if (!direction) throw new Error('Cannot get button direction');
		props.handleScroll(direction);
	};
	const leftButtonIsVisible = props.hovered && props.containerScrollLeft > 5;
	const rightButtonIsVisible =
		props.hovered &&
		props.containerScrollLeft < props.containerScrollWidth - props.containerClientWidth;
	return (
		<div
			className="scrollButtonsContainer"
			onMouseEnter={props.handleMouse}
			onMouseLeave={props.handleMouse}
		>
			<button
				className="scrollButton scrollButtonLeft"
				data-direction="left"
				onClick={handleScrollClick}
				style={{ opacity: leftButtonIsVisible ? 1 : 0 }}
			>
				<Icon className="mr-1" icon={faChevronLeft} />
			</button>
			<button
				className="scrollButton scrollButtonRight"
				data-direction="right"
				onClick={handleScrollClick}
				style={{ opacity: rightButtonIsVisible ? 1 : 0 }}
			>
				<Icon className="ml-1" icon={faChevronRight} />
			</button>
		</div>
	);
};

export default ScrollButtons;
