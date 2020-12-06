import React from 'react';
import cnnLogo from '../img/cnn_logo.png';
import { createPortal } from 'react-dom';

interface Props {
	drawerOpen: boolean;
}

const Footer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyFooter');
	if (!el) return null;
	return createPortal(
		<footer
			className="pr-3 d-flex align-items-center justify-content-between w-100"
			id="page-footer"
		>
			<img src={cnnLogo} style={{ height: '100px' }} />
			<span className="text-right">
				© 2021 Cable News Network. A WarnerMedia Company. All Rights Reserved. <br />
				CNN Sans ™ &amp; © 2016 Cable News Network.
			</span>
		</footer>,
		el,
	);
};

export default Footer;
