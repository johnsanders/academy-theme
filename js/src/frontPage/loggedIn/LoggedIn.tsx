import './style.css';
import '../../shared/style.css';
import { CarouselItem, Row as RowType, Tag } from '../../types';
import Carousel from './Carousel';
import Collection from './Collection';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Row from './Row';

interface Props {
	activeTagId: string | undefined;
	carouselItems: CarouselItem[];
	handleCarouselInit: () => void;
	handleCollectionInit: () => void;
	handleRowInit: () => void;
	rows: RowType[];
	setActiveTagId: (tagId: string) => void;
	setLoading: (loading: boolean) => void;
	tags: Tag[];
	visible: boolean;
}

const LoggedIn: React.FC<Props> = (props: Props): JSX.Element | null => (
	<div
		className={`container-fluid fadeIn ${props.visible ? '' : 'd-none'}`}
		style={{ marginTop: '122px' }}
	>
		{<ReactTooltip />}
		<div className="row">
			<div className="col-12 col-xl-10 offset-xl-1">
				<div className="my-3">
					<Carousel handleInit={props.handleCarouselInit} items={props.carouselItems} />
				</div>
				{props.activeTagId ? (
					<Collection
						handleInit={props.handleCollectionInit}
						rows={props.rows}
						setActiveTagId={props.setActiveTagId}
						tag={props.tags.find((tag) => tag.id === props.activeTagId)}
					/>
				) : (
					props.rows.map((row) => (
						<Row
							handleInit={props.handleRowInit}
							key={row.id}
							row={row}
							setActiveTagId={props.setActiveTagId}
						/>
					))
				)}
			</div>
		</div>
	</div>
);

export default LoggedIn;
