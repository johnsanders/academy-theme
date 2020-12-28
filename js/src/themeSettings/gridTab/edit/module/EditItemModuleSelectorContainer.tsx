import { Course, Module, RowItem } from '../../../../types';
import EditItemModuleSelector from './EditItemModuleSelector';
import React from 'react';

interface Props {
	className?: string;
	courses: Course[];
	itemsAlreadyInRow: RowItem[];
	onFocus: () => void;
	selectedItem: RowItem;
	updateModule: (module: Module, url?: string) => void;
}

const ModuleSelector: React.FC<Props> = (props: Props): JSX.Element => {
	const allModulesRef = React.useRef(
		props.courses.reduce<Module[]>((acc, course) => [...acc, ...course.modules], []),
	);
	const [courseId, setCourseId] = React.useState(props.courses[0].id);
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
	const selectedCourse = props.courses.find((course) => course.id === courseId);
	if (!selectedCourse) throw new Error('Cannot find selected course');
	const selectedItemName =
		props.selectedItem.modName === 'manual'
			? props.selectedItem.manualName
			: allModulesRef.current.find((module) => module.id === props.selectedItem.modId)?.name || '';
	return (
		<EditItemModuleSelector
			className={props.className}
			courses={props.courses}
			handleCourseChange={handleCourseChange}
			handleOpenSelectorClick={handleOpenSelectorClick}
			handleSelectModule={handleSelectModule}
			itemsAlreadyInRow={props.itemsAlreadyInRow}
			onFocus={props.onFocus}
			selectedCourse={selectedCourse}
			selectedItemName={selectedItemName}
			selectorIsOpen={selectorIsOpen}
		/>
	);
};

export default ModuleSelector;
