import { MoodleAcademySettings, Row as RowType, ScormAttempt } from '../../types';
import ErrorBoundary from '../../shared/ErrorBoundary';
import React from 'react';
import RowExpandButton from './RowExpandButton';
import RowItems from './RowItems';
import ScrollButtons from '../../shared/ScrollButtons';

interface Props {
	containerClientWidth: number;
	containerRef: React.MutableRefObject<HTMLDivElement | undefined>;
	containerScrollLeft: number;
	containerScrollWidth: number;
	handleInit: () => void;
	handleMouseEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleScrollClick: (direction: string) => void;
	handleScrollEvent: () => void;
	hovered: boolean;
	isWrapped: boolean;
	modsInfo: MoodleAcademySettings['modsInfo'];
	overflowBehavior: string;
	row: RowType;
	setOverflowBehavior: (overflowBehavior: string) => void;
	scormAttempts: ScormAttempt[];
	setActiveTagId: (tagId: string) => void;
}

const Row: React.FC<Props> = (props: Props): JSX.Element => (
	<ErrorBoundary errorMessage="Error rendering content row" handleError={props.handleInit}>
		<div>
			<h3>
				<RowExpandButton
					containerClientWidth={props.containerClientWidth}
					containerScrollWidth={props.containerScrollWidth}
					isWrapped={props.isWrapped}
					overflowBehavior={props.overflowBehavior}
					setOverflowBehavior={props.setOverflowBehavior}
				/>
				{props.row.name}
			</h3>
			<div className="position-relative">
				{props.overflowBehavior === 'scroll' ? (
					<ScrollButtons
						containerClientWidth={props.containerClientWidth}
						containerScrollLeft={props.containerScrollLeft}
						containerScrollWidth={props.containerScrollWidth}
						handleMouse={props.handleMouseEvent}
						handleScroll={props.handleScrollClick}
						hovered={props.hovered}
					/>
				) : null}
				<RowItems
					containerRef={props.containerRef}
					handleInit={props.handleInit}
					handleMouse={props.handleMouseEvent}
					handleScroll={props.handleScrollEvent}
					modsInfo={props.modsInfo}
					overflowBehavior={props.overflowBehavior}
					row={props.row}
					scormAttempts={props.scormAttempts}
					setActiveTagId={props.setActiveTagId}
				/>
			</div>
		</div>
	</ErrorBoundary>
);

export default Row;
