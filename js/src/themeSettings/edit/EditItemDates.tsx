import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import React from 'react';

interface Props {
	end: number | null;
	start: number | null;
	updateDate: (key: 'dateEnd' | 'dateStart', value: number | null) => void;
}

const EditItemDates: React.FC<Props> = (props: Props): JSX.Element => {
	const onStartChange = (date: Date | null): void =>
		props.updateDate('dateStart', date ? date.getTime() : null);
	const onEndChange = (date: Date | null): void =>
		props.updateDate('dateEnd', date ? date.getTime() : null);
	return (
		<div>
			<h3>Dates</h3>
			<div className="d-flex align-items-center">
				<div className="form-group mr-3">
					<label htmlFor="dateStart">Display Start</label>
					<div>
						<DatePicker
							className="form-control"
							id="dateStart"
							inline={false}
							isClearable={true}
							onChange={onStartChange}
							placeholderText="Not set"
							selected={props.start ? new Date(props.start) : null}
							showTimeSelect={true}
						/>
					</div>
				</div>
				<div className="form-group mr-3">
					<label htmlFor="dateEnd">Display End</label>
					<div>
						<DatePicker
							className="form-control"
							id="dateEnd"
							inline={false}
							isClearable={true}
							onChange={onEndChange}
							placeholderText="Not set"
							selected={props.end ? new Date(props.end) : null}
						/>
					</div>
				</div>
				{props.end && props.start ? null : (
					<span style={{ marginTop: '1em' }}>Unset date(s). Item will always display.</span>
				)}
			</div>
		</div>
	);
};

export default EditItemDates;
