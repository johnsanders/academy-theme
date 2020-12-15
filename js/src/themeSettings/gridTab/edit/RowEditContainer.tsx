import React from 'react';
import { Row } from '../../../types';
import RowEdit from './RowEdit';

interface Props {
	handleCancel: () => void;
	handleSaveRow: (row: Row) => void;
	initialValues: Row;
}

const RowAddContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [name, setName] = React.useState(props.initialValues.name);
	const [requiredCourses, setRequiredCourses] = React.useState<string[]>(
		props.initialValues.requiredCourses,
	);
	const [requiredCourse, setRequiredCourse] = React.useState('');
	const updaters = { setName, setRequiredCourse };
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const id = e.currentTarget.dataset.id;
		if (!id) throw new Error('Cannot find input id');
		if (updaters[id]) updaters[id](e.currentTarget.value);
	};
	const handleAddRequiredCourse = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (!requiredCourse || requiredCourses.includes(requiredCourse)) return;
		setRequiredCourses([...requiredCourses, requiredCourse]);
		setRequiredCourse('');
	};
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.handleCancel();
	};
	const handleSaveRow = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setName('');
		setRequiredCourse('');
		setRequiredCourses([]);
		props.handleSaveRow({
			id: props.initialValues.id,
			items: props.initialValues.items,
			name,
			requiredCourses,
		});
	};
	return (
		<RowEdit
			handleAddRequiredCourse={handleAddRequiredCourse}
			handleCancel={handleCancel}
			handleInputChange={handleInputChange}
			handleSaveRow={handleSaveRow}
			name={name}
			requiredCourse={requiredCourse}
			requiredCourses={requiredCourses}
		/>
	);
};

export default RowAddContainer;
