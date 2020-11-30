declare const rows: RowType[];
import './style.css';
import '../shared/style.css';
import Carousel from './Carousel';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Row from './Row';
import { Row as RowType } from '../types';

const App: React.FC = (): JSX.Element => {
	return (
		<>
			<ReactTooltip />
			<div className="mb-3">
				<Carousel />
			</div>

			{rows.map((row) => (
				<Row key={row.id} row={row} />
			))}
		</>
	);
};

export default App;
