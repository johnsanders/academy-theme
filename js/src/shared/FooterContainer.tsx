import ErrorBoundary from './ErrorBoundary';
import Footer from './Footer';
import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
	drawerOpen: boolean;
	visible?: boolean;
}

const FooterContainer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyFooter');
	if (!el) return null;
	return createPortal(
		<ErrorBoundary errorMessage="Error rendering footer">
			<Footer drawerOpen={props.drawerOpen} visible={props.visible} />
		</ErrorBoundary>,
		el,
	);
};

export default FooterContainer;
