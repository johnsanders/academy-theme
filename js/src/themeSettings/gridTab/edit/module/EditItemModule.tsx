import { Course, Module, RowItem } from '../../../../types';
import EditItemModuleManual from './EditItemModuleManual';
import EditItemModuleSelector from './EditItemModuleSelector';
import React from 'react';

interface Props {
	className?: string;
	course: Course;
	handleCourseChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	handleOpenSelectorClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSelectModule: (moduleId: string) => void;
	isManual: boolean;
	itemsAlreadyInRow: RowItem[];
	onFocus: () => void;
	selectorIsOpen: boolean;
	selectedItem: RowItem;
	setIsManual: (isManual: boolean) => void;
	updateModule: (manualModule: Module, url?: string) => void;
}

const EditItemModule: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<div className={`card ${props.className || ''}`}>
			<div className="card-header d-flex justify-content-between">
				<h4 className="mb-0">{props.isManual ? 'Manual Module' : 'Course Module'}</h4>
				<div className="btn-group">
					<button
						className={`btn btn-secondary btn-sm ${props.isManual ? '' : 'active'}`}
						onClick={() => props.setIsManual(false)}
					>
						Course Module
					</button>
					<button
						className={`btn btn-secondary btn-sm ${props.isManual ? 'active' : ''}`}
						onClick={() => props.setIsManual(true)}
					>
						Manual
					</button>
				</div>
			</div>
			<div className="card-body">
				{props.isManual ? (
					<EditItemModuleManual
						className={props.className}
						onFocus={props.onFocus}
						selectedItem={props.selectedItem}
						updateModule={props.updateModule}
					/>
				) : (
					<EditItemModuleSelector
						className={props.className}
						course={props.course}
						handleCourseChange={props.handleCourseChange}
						handleOpenSelectorClick={props.handleOpenSelectorClick}
						handleSelectModule={props.handleSelectModule}
						itemsAlreadyInRow={props.itemsAlreadyInRow}
						onFocus={props.onFocus}
						selectedModuleName={props.selectedItem.name}
						selectorIsOpen={props.selectorIsOpen}
					/>
				)}
			</div>
		</div>
	);
};

export default EditItemModule;
