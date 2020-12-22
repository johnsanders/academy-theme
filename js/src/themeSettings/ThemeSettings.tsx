import { CarouselItem, Config, Instructor, Row, Tag } from '../types';
import { faExclamationTriangle, faSave } from '@fortawesome/pro-solid-svg-icons';
import CarouselContainer from './carouselTab/CarouselContainer';
import GridContainer from './gridTab/GridContainer';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Instructors from './instructorsTab/Instructors';
import React from 'react';
import TagsContainer from './tagsTab/TagsContainer';
import Uploads from './Uploads';

interface Props {
	activeTab: string;
	config: Config;
	handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	inputRef: React.MutableRefObject<HTMLInputElement>;
	setCarousel: (carouselItems: CarouselItem[]) => void;
	setRows: (rows: Row[]) => void;
	setInstructors: (instructors: Instructor[]) => void;
	setTags: (tags: Tag[]) => void;
	submitForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
	unsavedChanges: boolean;
}

const tabs = ['Grid', 'Carousel', 'Instructors', 'Tags', 'Uploads'];

const ThemeSettings: React.FC<Props> = (props: Props): JSX.Element => (
	<div className="container" id="academyGridSettings">
		{!props.unsavedChanges ? null : (
			<div className="alert alert-warning unsavedAlert">
				<Icon className="mr-1" icon={faExclamationTriangle} />
				Unsaved Changes
			</div>
		)}
		<button className="btn btn-primary mt-3 mb-4 saveAll" onClick={props.submitForm}>
			<Icon className="mr-1" icon={faSave} />
			Save All Changes
		</button>
		<ul className="nav nav-tabs mb-4" style={{ cursor: 'pointer' }}>
			{tabs.map((tabName) => (
				<li className="nav-item" key={tabName}>
					<a
						className={`nav-link${props.activeTab === tabName.toLowerCase() ? ' active' : ''}`}
						data-id={tabName.toLowerCase()}
						onClick={props.handleNavClick}
					>
						{tabName}
					</a>
				</li>
			))}
		</ul>
		{props.activeTab === 'grid' ? (
			<GridContainer config={props.config} setRows={props.setRows} />
		) : null}
		{props.activeTab === 'carousel' ? (
			<CarouselContainer
				carouselItems={props.config.carousel}
				inputRef={props.inputRef}
				setCarousel={props.setCarousel}
			/>
		) : null}
		{props.activeTab === 'instructors' ? (
			<Instructors instructors={props.config.instructors} setInstructors={props.setInstructors} />
		) : null}
		{props.activeTab === 'tags' ? (
			<TagsContainer setTags={props.setTags} tags={props.config.tags} />
		) : null}
		{props.activeTab === 'uploads' ? <Uploads /> : null}
		<button className="btn btn-primary mt-3 saveAll" onClick={props.submitForm}>
			<Icon className="mr-1" icon={faSave} />
			Save All Changes
		</button>
	</div>
);

export default ThemeSettings;
