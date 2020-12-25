import React from 'react';
import cnnLogo from '../img/cnn_logo.png';
import { createPortal } from 'react-dom';

interface Props {
	drawerOpen: boolean;
	visible?: boolean;
}

const Footer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyFooter');
	if (!el) return null;
	return createPortal(
		<footer
			className={`
				row px-0 py-2 py-md-0 mx-0 fadeIn
				${props.visible === false ? 'd-none' : ''}
				${props.drawerOpen ? 'drawerOpen' : ''}
			`}
			id="page-footer"
		>
			<div
				className="col-12 col-md-2 d-none d-md-flex justify-content-center justify-content-md-start mb-2 mb-md-0"
				style={{ marginLeft: '-15px', marginRight: '15px' }}
			>
				<img src={cnnLogo} style={{ height: '100px', minHeight: '100%' }} />
			</div>
			<div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
				<a
					className="mr-3"
					data-translate="termsofuse"
					href="https://commercial.cnn.com/terms-conditions"
				>
					Terms of Use
				</a>
				<a
					className="mr-3"
					data-translate="privacypolicy"
					href="https://commercial.cnn.com/privacy-policy"
				>
					Privacy Policy
				</a>
				<a data-translate="cookies" href="https://commercial.cnn.com/cookies">
					Cookies
				</a>
			</div>
			<div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center align-items-md-end py-1">
				<div className="text-center text-md-right pr-3" data-translate="copyright">
					© 2021 Cable News Network. A WarnerMedia Company. All Rights Reserved.
				</div>
				<div className="text-right pr-3">CNN Sans ™ &amp; © 2016 Cable News Network.</div>
			</div>
		</footer>,
		el,
	);
};

export default Footer;
