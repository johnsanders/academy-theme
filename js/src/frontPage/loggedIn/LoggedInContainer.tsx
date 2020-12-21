declare const cnnAcademy: MoodleAcademy;
import './style.css';
import '../../shared/style.css';
import LoggedIn from './LoggedIn';
import { MoodleAcademy } from '../../types';
import React from 'react';
import { createPortal } from 'react-dom';
import { parse as qsParse } from 'qs';
import updateUrlQuery from '../../helpers/updateUrlQuery';

const { carouselItems, rows, tags } = cnnAcademy;

interface Props {
	setLoading: (loading: boolean) => void;
	visible: boolean;
}

const LoggedInContainer: React.FC<Props> = (props: Props): JSX.Element | null => {
	const el = document.getElementById('academyContent');
	const queryRef = React.useRef(qsParse(window.location.search, { ignoreQueryPrefix: true }));
	const carouselDidInit = React.useRef(false);
	const collectionDidInit = React.useRef(false);
	const rowInitRef = React.useRef(0);
	const [activeTagId, setActiveTagId] = React.useState(
		queryRef.current.collection as string | undefined,
	);
	React.useEffect(
		() =>
			activeTagId === ''
				? updateUrlQuery(null, ['collection'])
				: updateUrlQuery({ collection: activeTagId }),
		[activeTagId],
	);
	const handleCarouselInit = () => {
		carouselDidInit.current = true;
		if (rowInitRef.current >= rows.length) props.setLoading(false);
		if (activeTagId && collectionDidInit.current) props.setLoading(false);
	};
	const handleCollectionInit = () => {
		collectionDidInit.current = true;
		if (carouselDidInit.current) props.setLoading(false);
	};
	const handleRowInit = () => {
		rowInitRef.current += 1;
		if (rowInitRef.current >= rows.length && carouselDidInit.current) props.setLoading(false);
	};
	if (!el) return null;
	return createPortal(
		<LoggedIn
			activeTagId={activeTagId}
			carouselItems={carouselItems}
			handleCarouselInit={handleCarouselInit}
			handleCollectionInit={handleCollectionInit}
			handleRowInit={handleRowInit}
			rows={rows}
			setActiveTagId={setActiveTagId}
			setLoading={props.setLoading}
			tags={tags}
			visible={props.visible}
		/>,
		el,
	);
};

export default LoggedInContainer;
