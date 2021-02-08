import { MoodleAcademySettings, Row as RowType, ScormAttempt } from '../../types';
import React from 'react';
import Row from './Row';
import debounce from 'lodash/debounce';

const checkIsWrapped = (children?: NodeListOf<ChildNode>): boolean => {
	if (!children) return false;
	const top = (children[0] as HTMLDivElement).offsetTop;
	for (const childNode of Array.from(children))
		if ((childNode as HTMLDivElement).offsetTop > top) return true;
	return false;
};

interface Props {
	handleInit: () => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	row: RowType;
	scormAttempts: ScormAttempt[];
	setActiveTagId: (tagId: string) => void;
}

const RowContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const containerRef = React.useRef<HTMLDivElement>();
	const [containerClientWidth, setContainerClientWidth] = React.useState(0);
	const [containerScrollLeft, setContainerScrollLeft] = React.useState(0);
	const [containerScrollWidth, setContainerScrollWidth] = React.useState(0);
	const [overflowBehavior, setOverflowbehavior] = React.useState(props.row.overflowBehavior);
	const [hovered, setHovered] = React.useState(false);
	const [isWrapped, setIsWrapped] = React.useState(false);
	const updateContainerInfo = debounce((): void => {
		if (!containerRef.current) return;
		setContainerClientWidth(containerRef.current.clientWidth);
		setContainerScrollLeft(containerRef.current.scrollLeft);
		setContainerScrollWidth(containerRef.current.scrollWidth);
		setIsWrapped(checkIsWrapped(containerRef.current?.childNodes));
	}, 250);
	React.useEffect(() => {
		if (props.row.items.length === 0) props.handleInit();
	}, []);
	React.useEffect(() => {
		updateContainerInfo();
		updateContainerInfo.flush();
	}, [overflowBehavior]);
	const handleInit = () => {
		props.handleInit();
		setTimeout(() => {
			updateContainerInfo();
		}, 50);
	};
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
		<Row
			containerClientWidth={containerClientWidth}
			containerRef={containerRef}
			containerScrollLeft={containerScrollLeft}
			containerScrollWidth={containerScrollWidth}
			handleInit={handleInit}
			handleMouseEvent={handleMouseEvent}
			handleScrollClick={handleScrollClick}
			handleScrollEvent={handleScrollEvent}
			hovered={hovered}
			isWrapped={isWrapped}
			modsInfo={props.modsInfo}
			overflowBehavior={overflowBehavior}
			row={props.row}
			scormAttempts={props.scormAttempts}
			setActiveTagId={props.setActiveTagId}
			setOverflowBehavior={setOverflowbehavior}
		/>
	);
};

export default RowContainer;
