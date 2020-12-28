import { Course } from '../../../types';
import React from 'react';
import RowEditRequiredCourses from './RowEditRequiredCourses';

interface Props {
	allCourses: Course[];
	handleAddRequiredCourse: (courseId: string) => void;
	requiredCourses: string[];
}

const RowEditRequiredCoursesContainer: React.FC<Props> = (props: Props) => {
	const [selectedCourse, setSelectedCourse] = React.useState(props.allCourses[0]);
	const handleSelectedCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const course = props.allCourses.find((course) => course.id === e.currentTarget.value);
		if (course) setSelectedCourse(course);
	};
	const handleAddRequiredCourse = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!selectedCourse || props.requiredCourses.includes(selectedCourse.id)) return;
		props.handleAddRequiredCourse(selectedCourse.id);
	};
	if (props.allCourses.length === 0) return <div>No courses available to assign.</div>;
	return (
		<RowEditRequiredCourses
			allCourses={props.allCourses}
			handleAddRequiredCourse={handleAddRequiredCourse}
			handleSelectedCourseChange={handleSelectedCourseChange}
			requiredCourses={props.requiredCourses}
			selectedCourse={selectedCourse}
		/>
	);
};

export default RowEditRequiredCoursesContainer;
