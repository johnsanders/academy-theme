declare const rows: RowType[];
import './style.css';
import '../shared/style.css';
import Carousel from './Carousel';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Row from './Row';
import { Row as RowType } from '../types';
import { createPortal } from 'react-dom';

const Display: React.FC = (): JSX.Element | null => {
	const el = document.getElementById('academyGrid');
	if (!el) return null;
	return createPortal(
		<>
			<ReactTooltip />
			<div className="my-3">
				<Carousel />
			</div>
			{rows.map((row) => (
				<Row key={row.id} row={row} />
			))}
		</>,
		el,
	);
};

export default Display;
