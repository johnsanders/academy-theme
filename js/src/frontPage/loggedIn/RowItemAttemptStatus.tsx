import { faCheck, faWatch } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	status: string;
}

const RowItemAttemptStatus: React.FC<Props> = (props: Props) => {
	if (props.status === 'none') return null;
	if (props.status === 'complete')
		return (
			<div className="attemptStatus attemptComplete">
				<Icon data-tip="Module completed!" icon={faCheck} />
			</div>
		);
	if (props.status === 'incomplete')
		return (
			<div className="attemptStatus attemptIncomplete">
				<Icon data-tip="Module in progress" icon={faWatch} />
			</div>
		);
	return null;
};

export default RowItemAttemptStatus;
