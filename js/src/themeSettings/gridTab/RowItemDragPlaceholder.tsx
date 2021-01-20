import { MoodleAcademySettings, RowItem as RowItemType } from '../../types';
import React from 'react';
import RowItem from './RowItem';

interface Props {
	activeItemId: string;
	items: RowItemType[];
	modsInfo: MoodleAcademySettings['modsInfo'];
}

const RowItemDragPlaceholder: React.FC<Props> = (props: Props) => {
	const item = props.items.find((rowItem) => rowItem.id === props.activeItemId);
	if (!item) return null;
	return <RowItem item={item} modsInfo={props.modsInfo} />;
};

export default RowItemDragPlaceholder;
