import EditItemDates from './EditItemDates';
import React from 'react';
import { UpdateDateArgs } from '../EditItemContainer';

interface Props {
	className?: string;
	displayed: number | null;
	end: number | null;
	start: number | null;
	updateDate: (args: UpdateDateArgs) => void;
}

const EditItemDatesContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [editing, setEditing] = React.useState(props.start !== null || props.end !== null);
	const onDisplayedChange = (date: Date | null): void =>
		props.updateDate({ dateDisplay: date ? date.getTime() : null });
	const onStartChange = (date: Date | null): void =>
		props.updateDate({ dateStart: date ? date.getTime() : null });
	const onEndChange = (date: Date | null): void =>
		props.updateDate({ dateEnd: date ? date.getTime() : null });
	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (e.currentTarget.id === 'editOn') setEditing(true);
		if (e.currentTarget.id === 'editOff') {
			props.updateDate({ dateEnd: null, dateStart: null });
			setEditing(false);
		}
	};
	return (
		<EditItemDates
			className={props.className}
			displayed={props.displayed}
			editing={editing}
			end={props.end}
			handleButtonClick={handleButtonClick}
			onDisplayedChange={onDisplayedChange}
			onEndChange={onEndChange}
			onStartChange={onStartChange}
			start={props.start}
		/>
	);
};

export default EditItemDatesContainer;
