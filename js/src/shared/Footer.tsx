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
			className={`row ${props.drawerOpen ? 'drawerOpen' : ''} pb-sm-2 pb-md-0`}
			id="page-footer"
		>
			<div className="col-sm-12 col-md-2 d-flex justify-content-sm-center justify-content-md-start mb-sm-2 mb-md-0">
				<img src={cnnLogo} style={{ height: '100px', minHeight: '100%' }} />
			</div>
			<div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center mb-sm-2 mb-md-0">
				<a className="mr-3" href="https://commercial.cnn.com/terms-conditions">
					Terms of Use
				</a>
				<a className="mr-3" href="https://commercial.cnn.com/privacy-policy">
					Privacy Policy
				</a>
				<a href="https://commercial.cnn.com/cookies">Cookies</a>
			</div>
			<div className="col-sm-12 col-md-5 d-flex flex-column justify-content-center align-items-sm-center align-items-md-end">
				<div className="text-right pr-3">
					© 2021 Cable News Network. A WarnerMedia Company. All Rights Reserved.
				</div>
				<div className="text-right pr-3">CNN Sans ™ &amp; © 2016 Cable News Network.</div>
			</div>
		</footer>,
		el,
	);
};

export default Footer;
