import 'react-datepicker/dist/react-datepicker.css';
import EditItemDatepicker from './EditItemDatepicker';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	className?: string;
	displayed: number | null;
	editing: boolean;
	end: number | null;
	handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onDisplayedChange: (date: Date) => void;
	onEndChange: (date: Date) => void;
	onStartChange: (date: Date) => void;
	start: number | null;
}

const EditItemDates: React.FC<Props> = (props: Props): JSX.Element => (
	<div className={`card ${props.className || ''}`}>
		<div className="card-header pt-2 pb-0">
			<h4>Dates</h4>
		</div>
		<div className="card-body">
			<div className="text-info mb-3">
				<Icon className="mr-1" icon={faInfoCircle} />
				All times in GMT
			</div>
			<EditItemDatepicker
				className="mr-1 mb-3"
				id="dateVisible"
				isClearable={true}
				label="Date displayed with item"
				onChange={props.onDisplayedChange}
				value={props.displayed}
			/>
			<h5>Item is displayed</h5>
			<div className="btn-group mb-0 mb-2" id="displayDateToggle">
				<button
					className={`btn btn-sm btn-secondary ${props.editing ? '' : 'active'}`}
					id="editOff"
					onClick={props.handleButtonClick}
				>
					Always
				</button>
				<button
					className={`btn btn-sm btn-secondary ${props.editing ? 'active' : ''}`}
					id="editOn"
					onClick={props.handleButtonClick}
				>
					During Date Range
				</button>
			</div>
			<div className="d-flex align-items-center">
				{!props.editing ? null : (
					<>
						<EditItemDatepicker
							className="mr-1 mb-0"
							id="dateStart"
							label="Start Date"
							onChange={props.onStartChange}
							value={props.start}
						/>
						<EditItemDatepicker
							className="mr-1 mb-0"
							id="dateEnd"
							label="End Date"
							onChange={props.onEndChange}
							value={props.end}
						/>
						{props.end && props.start ? null : (
							<span className="text-danger" style={{ lineHeight: 1, marginTop: '2em' }}>
								Unset date(s). Item will always display.
							</span>
						)}
					</>
				)}
			</div>
		</div>
	</div>
);

export default EditItemDates;
