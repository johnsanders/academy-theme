import { MoodleAcademyFront, Row, ScormAttempt } from '../../types';
import React from 'react';
import RowItemContainer from './RowItemContainer';

interface Props {
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	handleMouse: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleInit: () => void;
	handleScroll: () => void;
	modsInfo: MoodleAcademyFront['modsInfo'];
	overflowBehavior: string;
	row: Row;
	scormAttempts: ScormAttempt[];
	setActiveTagId: (tagId: string) => void;
}

const RowItems: React.FC<Props> = (props: Props): JSX.Element => {
	const itemsInitCountRef = React.useRef(0);
	const handleItemInit = () => {
		itemsInitCountRef.current += 1;
		if (itemsInitCountRef.current === props.row.items.length) props.handleInit();
	};
	return (
		<div
			className={`gridRowItems gridRowItems_${props.overflowBehavior}`}
			onMouseEnter={props.handleMouse}
			onMouseLeave={props.handleMouse}
			onScroll={props.handleScroll}
			ref={(el) => {
				if (el) props.containerRef.current = el;
			}}
		>
			{props.row.items.map((item) => {
				return (
					<RowItemContainer
						handleInit={handleItemInit}
						item={item}
						key={item.id}
						modsInfo={props.modsInfo}
						scormAttempts={props.scormAttempts}
						setActiveTagId={props.setActiveTagId}
					/>
				);
			})}
		</div>
	);
};

export default RowItems;
