import React from 'react';

interface Props {
	userMenu: string;
}

const SimpleMenu: React.FC<Props> = (props: Props) => (
	<div
		className="forcedUserMenu"
		dangerouslySetInnerHTML={{ __html: props.userMenu }}
		style={{ position: 'fixed', right: '1em', zIndex: 900 }}
	/>
);

export default SimpleMenu;
