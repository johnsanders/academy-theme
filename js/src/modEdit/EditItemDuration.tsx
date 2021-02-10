import React from 'react';

interface Props {
	className?: string;
	duration: string;
	updateDuration: (duration: string) => void;
}

const EditItemDuration: React.FC<Props> = (props: Props): JSX.Element => {
	const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		props.updateDuration(e.currentTarget.value);
	return (
		<div className={`card ${props.className || ''}`}>
			<div className="card-header pt-2 pb-0">
				<h4>Duration</h4>
			</div>
			<div className="card-body">
				<input className="form-control" onChange={handleDurationChange} value={props.duration} />
			</div>
		</div>
	);
};

export default EditItemDuration;
