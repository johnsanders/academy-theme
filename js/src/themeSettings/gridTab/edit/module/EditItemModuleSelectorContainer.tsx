declare const cnnAcademy: MoodleAcademy;
import { Module, MoodleAcademy, RowItem } from '../../../../types';
import EditItemModuleSelector from './EditItemModuleSelector';
import React from 'react';

interface Props {
	className?: string;
	itemsAlreadyInRow: RowItem[];
	onFocus: () => void;
	selectedItemName: string;
	updateModule: (module: Module, url?: string) => void;
}

const ModuleSelector: React.FC<Props> = (props: Props): JSX.Element => {
	const { courses } = cnnAcademy;
	const allModulesRef = React.useRef(
		courses.reduce<Module[]>((acc, course) => [...acc, ...course.modules], []),
	);
	const [courseId, setCourseId] = React.useState(courses[0].id);
	const [selectorIsOpen, setSelectorIsOpen] = React.useState(false);
	const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>): void =>
		setCourseId(e.currentTarget.value);
	const handleSelectModule = (moduleId: string): void => {
		const module = allModulesRef.current.find((module) => module.id === moduleId);
		if (!module) throw new Error('Cannot get module info');
		props.updateModule(module);
		setSelectorIsOpen(false);
	};
	const handleOpenSelectorClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setSelectorIsOpen(true);
	};
	const course = courses.find((course) => course.id === courseId);
	if (!course) throw new Error('Cannot find selected course');
	return (
		<EditItemModuleSelector
			className={props.className}
			course={course}
			handleCourseChange={handleCourseChange}
			handleOpenSelectorClick={handleOpenSelectorClick}
			handleSelectModule={handleSelectModule}
			itemsAlreadyInRow={props.itemsAlreadyInRow}
			onFocus={props.onFocus}
			selectedModuleName={props.selectedItemName}
			selectorIsOpen={selectorIsOpen}
		/>
	);
};

export default ModuleSelector;