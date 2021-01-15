import { Course, Row } from '../../../../types';
import React from 'react';
import RowEdit from './RowEdit';

interface Props {
	allCourses: Course[];
	handleCancel: () => void;
	handleSaveRow: (row: Row) => void;
	initialValues: Row;
}

const RowEditContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [name, setName] = React.useState(props.initialValues.name);
	const [overflowBehavior, setOverflowBehavior] = React.useState(
		props.initialValues.overflowBehavior,
	);
	const [requiredCourses, setRequiredCourses] = React.useState<string[]>(
		props.initialValues.requiredCourses,
	);
	const updaters = { setName, setOverflowBehavior };
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const id = e.currentTarget.dataset.id;
		if (!id) throw new Error('Cannot find input id');
		if (updaters[id]) updaters[id](e.currentTarget.value);
	};
	const handleAddRequiredCourse = (courseId: string): void => {
		if (requiredCourses.includes(courseId)) return;
		setRequiredCourses([...requiredCourses, courseId]);
	};
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.handleCancel();
	};
	const handleSaveRow = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setName('');
		setRequiredCourses([]);
		props.handleSaveRow({
			id: props.initialValues.id,
			items: props.initialValues.items,
			name,
			overflowBehavior,
			requiredCourses,
		});
	};
	return (
		<RowEdit
			allCourses={props.allCourses}
			handleAddRequiredCourse={handleAddRequiredCourse}
			handleCancel={handleCancel}
			handleInputChange={handleInputChange}
			handleSaveRow={handleSaveRow}
			name={name}
			overflowBehavior={overflowBehavior}
			requiredCourses={requiredCourses}
		/>
	);
};

export default RowEditContainer;
