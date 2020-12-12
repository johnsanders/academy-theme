import React from 'react';
import { Row } from '../../types';
import RowAdd from './RowAdd';
import { v4 as uuid } from 'uuid';

interface Props {
	handleAdd: (row: Row) => void;
}

const RowAddContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [formOpen, setFormOpen] = React.useState(false);
	const [name, setName] = React.useState('');
	const [requiredCourses, setRequiredCourses] = React.useState<string[]>([]);
	const [requiredCourse, setRequiredCourse] = React.useState('');
	const updaters = { setName, setRequiredCourse };
	const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setFormOpen(true);
	};
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
		setFormOpen(false);
	};
	const handleAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.handleAdd({ id: uuid(), items: [], name, requiredCourses });
		setName('');
		setRequiredCourse('');
		setRequiredCourses([]);
		setFormOpen(false);
	};
	return (
		<RowAdd
			formOpen={formOpen}
			handleAdd={handleAdd}
			handleAddRequiredCourse={handleAddRequiredCourse}
			handleCancel={handleCancel}
			handleInputChange={handleInputChange}
			handleOpenForm={handleOpenForm}
			name={name}
			requiredCourse={requiredCourse}
			requiredCourses={requiredCourses}
		/>
	);
};

export default RowAddContainer;
