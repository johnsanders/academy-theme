import { CarouselItem, Course, Instructor, MoodleAcademySettings, Row, Tag } from '../types';
import { faExclamationTriangle, faSave } from '@fortawesome/pro-solid-svg-icons';
import CarouselTab from './carouselTab';
import GridTab from './gridTab';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import InstructorsTab from './instructorsTab';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import TagsTab from './tagsTab';
import UploadsTab from './UploadsTab';

interface Props {
	activeTab: string;
	carousel: CarouselItem[];
	courses: Course[];
	handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	inputRef: React.MutableRefObject<HTMLInputElement>;
	instructors: Instructor[];
	modsInfo: MoodleAcademySettings['modsInfo'];
	rows: Row[];
	setCarousel: (carouselItems: CarouselItem[]) => void;
	setRows: (rows: Row[]) => void;
	setInstructors: (instructors: Instructor[]) => void;
	setTags: (tags: Tag[]) => void;
	submitForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
	tags: Tag[];
	thumbUrls: string[];
	unsavedChanges: boolean;
}

const tabs = ['Grid', 'Carousel', 'Instructors', 'Tags', 'Uploads'];

const ThemeSettings: React.FC<Props> = (props: Props): JSX.Element => (
	<div className="container" id="academyGridSettings">
		<ReactTooltip />
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
			<GridTab
				courses={props.courses}
				instructors={props.instructors}
				modsInfo={props.modsInfo}
				rows={props.rows}
				setRows={props.setRows}
				tags={props.tags}
				thumbUrls={props.thumbUrls}
			/>
		) : null}
		{props.activeTab === 'carousel' ? (
			<CarouselTab
				carouselItems={props.carousel}
				inputRef={props.inputRef}
				setCarousel={props.setCarousel}
			/>
		) : null}
		{props.activeTab === 'instructors' ? (
			<InstructorsTab instructors={props.instructors} setInstructors={props.setInstructors} />
		) : null}
		{props.activeTab === 'tags' ? (
			<TagsTab setTags={props.setTags} tags={props.tags} thumbUrls={props.thumbUrls} />
		) : null}
		{props.activeTab === 'uploads' ? <UploadsTab /> : null}
		<button className="btn btn-primary mt-3 saveAll" onClick={props.submitForm}>
			<Icon className="mr-1" icon={faSave} />
			Save All Changes
		</button>
	</div>
);

export default ThemeSettings;
