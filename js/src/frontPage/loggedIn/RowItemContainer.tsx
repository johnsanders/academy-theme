import { MoodleAcademyFront, RowItem as RowItemType, ScormAttempt } from '../../types';
import React from 'react';
import RowItem from './RowItem';
import createModuleUrl from '../../helpers/createModuleUrl';

interface Props {
	handleInit: () => void;
	item: RowItemType;
	modsInfo: MoodleAcademyFront['modsInfo'];
	scormAttempts: ScormAttempt[];
	setActiveTagId: (tagId: string) => void;
}

const RowItemContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const dateString =
		props.item.dateDisplayed && new Date(props.item.dateDisplayed).toLocaleString();
	const handleTagClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
		const tagId = e.currentTarget.dataset.id;
		if (tagId) props.setActiveTagId(tagId);
	};
	const handleError = () => props.handleInit();
	const name =
		props.item.modName === 'manual' ? props.item.manualName : props.modsInfo[props.item.modId].name;
	const url =
		props.item.modName === 'manual'
			? props.item.manualUrl
			: createModuleUrl(props.item.modId, props.item.modName);
	let attemptStatus = 'none';
	if (props.item.modName === 'scorm') {
		const attempt = props.scormAttempts[props.item.modId];
		if (attempt && attempt.value === '0') attemptStatus = 'incomplete';
		else if (attempt) attemptStatus = 'complete';
	}
	return (
		<RowItem
			attemptStatus={attemptStatus}
			dateString={dateString}
			handleError={handleError}
			handleInit={props.handleInit}
			handleTagClick={handleTagClick}
			item={props.item}
			name={name}
			url={url}
		/>
	);
};

export default RowItemContainer;
