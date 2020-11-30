import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSpinner } from '@fortawesome/pro-solid-svg-icons';

const Loading: React.FC = (): JSX.Element => (
	<div className="h-100 w-100 d-flex align-items-center justify-content-center">
		<Icon className="fa-pulse fa-3x" icon={faSpinner} />
	</div>
);

export default Loading;
