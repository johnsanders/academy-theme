import 'react-datepicker/dist/react-datepicker.css';
import './datepickerStyle.css';
import DatePicker from 'react-datepicker';
import React from 'react';

interface Props {
	className?: string;
	id: string;
	isClearable?: boolean;
	label?: string;
	onChange: (date: Date) => void;
	value: number | null;
}

const EditItemDatepicker: React.FC<Props> = (props: Props): JSX.Element => (
	<div className={`form-group ${props.className || ''}`}>
		{!props.label ? null : (
			<label className="d-block" htmlFor={props.id}>
				{props.label}
			</label>
		)}
		<DatePicker
			className="form-control"
			dateFormat="d MMM, yyyy | HH:mm"
			id={props.id}
			isClearable={props.isClearable}
			onChange={props.onChange}
			placeholderText="Not set"
			selected={props.value ? new Date(props.value) : null}
			showTimeSelect={true}
		/>
	</div>
);

export default EditItemDatepicker;
