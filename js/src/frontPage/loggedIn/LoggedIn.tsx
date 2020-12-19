declare const cnnAcademy: MoodleAcademy;
import './style.css';
import '../../shared/style.css';
import Carousel from './Carousel';
import Collection from './Collection';
import { MoodleAcademy } from '../../types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Row from './Row';
import { createPortal } from 'react-dom';
import { parse as qsParse } from 'qs';
import updateUrl from '../../helpers/updateUrl';

const LoggedIn: React.FC = (): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	const queryRef = React.useRef(qsParse(window.location.search, { ignoreQueryPrefix: true }));
	const [activeTagId, setActiveTagId] = React.useState(queryRef.current.collection);
	React.useEffect(
		() => (activeTagId === '' ? updateUrl(null) : updateUrl({ collection: activeTagId })),
		[activeTagId],
	);
	if (!el) return null;
	return createPortal(
		<div className="container-fluid" style={{ marginTop: '122px' }}>
			<ReactTooltip />
			<div className="row">
				<div className="col-12 col-xl-10 offset-xl-1">
					<div className="my-3">
						<Carousel />
					</div>
					{activeTagId ? (
						<Collection
							rows={cnnAcademy.rows}
							setActiveTagId={setActiveTagId}
							tag={cnnAcademy.tags.find((tag) => tag.id === activeTagId)}
						/>
					) : (
						cnnAcademy.rows.map((row) => (
							<Row key={row.id} row={row} setActiveTagId={setActiveTagId} />
						))
					)}
				</div>
			</div>
		</div>,
		el,
	);
};

export default LoggedIn;
