import { MoodleAcademySettings, RowItem as RowItemType } from '../../types';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import RowItem from './RowItem';
import { useSortable } from '@dnd-kit/sortable';

interface Props {
	item: RowItemType;
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	modsInfo: MoodleAcademySettings['modsInfo'];
	rowId: string;
}

const RowItemSortable: React.FC<Props> = (props: Props): JSX.Element => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: props.item.id,
	});
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	return (
		<RowItem
			attributes={attributes}
			listeners={listeners}
			ref={setNodeRef}
			style={style}
			{...props}
		/>
	);
};

export default RowItemSortable;
