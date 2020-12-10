import React from 'react';

interface Props {
	userMenu: string;
}

const SimpleMenu: React.FC<Props> = (props: Props) => (
	<div
		className="forcedUserMenu"
		dangerouslySetInnerHTML={{ __html: props.userMenu }}
		style={{
			backgroundColor: 'black',
			padding: '0 0.5em',
			position: 'fixed',
			right: 0,
			zIndex: 900,
		}}
	/>
);

export default SimpleMenu;
