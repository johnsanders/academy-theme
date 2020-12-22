declare const cnnAcademy: MoodleAcademy;
import { Course, MoodleAcademy, RowItem } from '../../../../types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import ModulesList from './ModulesList';
import React from 'react';
import { faBookOpen } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	className?: string;
	course: Course;
	handleCourseChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	handleOpenSelectorClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSelectModule: (moduleId: string) => void;
	itemsAlreadyInRow: RowItem[];
	onFocus: () => void;
	selectorIsOpen: boolean;
	selectedModuleName: string;
}

const EditItemModuleSelector: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<div className="form-group">
			<h5>Module Name</h5>
			{props.selectedModuleName === '' ? (
				<div className="text-muted">No module selected.</div>
			) : (
				<div>{props.selectedModuleName}</div>
			)}
		</div>
		{!props.selectorIsOpen ? (
			<div className="form-group mb-0">
				<button
					className="btn btn-secondary"
					onClick={props.handleOpenSelectorClick}
					onFocus={props.onFocus}
				>
					<Icon className="mr-1" icon={faBookOpen} />
					Select Item Module
				</button>
			</div>
		) : (
			<>
				<div className="form-group">
					<label htmlFor="addToRow">Select Course</label>
					<select
						className="form-control"
						onChange={props.handleCourseChange}
						value={props.course.id}
					>
						{cnnAcademy.courses.map((course) => (
							<option key={course.id} value={course.id}>
								{course.fullname}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label>Select Module</label>
					<ModulesList
						course={props.course}
						existingRowModuleIds={props.itemsAlreadyInRow.map((item) => item.modId)}
						handleSelectModule={props.handleSelectModule}
					/>
				</div>
			</>
		)}
	</>
);

export default EditItemModuleSelector;
