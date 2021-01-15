import { MoodleAcademySettings, Row as RowType, ScormAttempt } from '../../types';
import React from 'react';
import RowItems from './RowItems';
import ScrollButtons from '../../shared/ScrollButtons';
import debounce from 'lodash/debounce';

interface Props {
	handleInit: () => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	row: RowType;
	scormAttempts: ScormAttempt[];
	setActiveTagId: (tagId: string) => void;
}

const Row: React.FC<Props> = (props: Props): JSX.Element => {
	const containerRef = React.useRef<HTMLDivElement>();
	const [containerClientWidth, setContainerClientWidth] = React.useState(0);
	const [containerScrollLeft, setContainerScrollLeft] = React.useState(0);
	const [containerScrollWidth, setContainerScrollWidth] = React.useState(0);
	const [hovered, setHovered] = React.useState(false);
	React.useEffect(() => {
		if (props.row.items.length === 0) props.handleInit();
	}, []);
	const updateContainerInfo = debounce((): void => {
		if (!containerRef.current) return;
		setContainerClientWidth(containerRef.current.clientWidth);
		setContainerScrollLeft(containerRef.current.scrollLeft);
		setContainerScrollWidth(containerRef.current.scrollWidth);
	}, 250);
	const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>): void => {
		if (e.type === 'mouseenter') {
			setHovered(true);
			updateContainerInfo();
		} else if (e.type === 'mouseleave') setHovered(false);
	};
	const handleScrollClick = (direction: string): void => {
		if (!containerRef.current) return;
		const { clientWidth, scrollLeft } = containerRef.current;
		const plusMinus = direction === 'left' ? -1 : 1;
		const distance = scrollLeft + (clientWidth - 25) * plusMinus;
		containerRef.current.scroll({ behavior: 'smooth', left: distance });
	};
	const handleScrollEvent = (): void => updateContainerInfo();
	return (
		<div>
			<h3>{props.row.name}</h3>
			<div className="position-relative">
				{props.row.overflowBehavior === 'scroll' ? (
					<ScrollButtons
						containerClientWidth={containerClientWidth}
						containerScrollLeft={containerScrollLeft}
						containerScrollWidth={containerScrollWidth}
						handleMouse={handleMouseEvent}
						handleScroll={handleScrollClick}
						hovered={hovered}
					/>
				) : null}
				<RowItems
					containerRef={containerRef}
					handleInit={props.handleInit}
					handleMouse={handleMouseEvent}
					handleScroll={handleScrollEvent}
					modsInfo={props.modsInfo}
					row={props.row}
					scormAttempts={props.scormAttempts}
					setActiveTagId={props.setActiveTagId}
				/>
			</div>
		</div>
	);
};

export default Row;
