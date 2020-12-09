declare const cnnAcademy: MoodleAcademy;
import './style.css';
import '../../shared/style.css';
import Carousel from './Carousel';
import { MoodleAcademy } from '../../types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Row from './Row';
import { createPortal } from 'react-dom';

const LoggedIn: React.FC = (): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	if (!el) return null;
	return createPortal(
		<div className="container" style={{ marginTop: '122px' }}>
			<ReactTooltip />
			<div className="my-3">
				<Carousel />
			</div>
			{cnnAcademy.rows.map((row) => (
				<Row key={row.id} row={row} />
			))}
		</div>,
		el,
	);
};

export default LoggedIn;
