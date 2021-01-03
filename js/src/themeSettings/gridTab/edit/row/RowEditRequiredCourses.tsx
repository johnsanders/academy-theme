import { Course } from '../../../../types';
import React from 'react';

interface Props {
	allCourses: Course[];
	handleAddRequiredCourse: (couseId: string) => void;
	requiredCourses: string[];
}

const RowEditRequiredCourses: React.FC<Props> = (props: Props) => {
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
		<>
			<label htmlFor="requiredCourses">Select Required Course</label>
			<div className="input-group">
				<select
					className="form-control"
					id="requiredCourses"
					onChange={handleSelectedCourseChange}
					value={selectedCourse.id}
				>
					{props.allCourses.map((course) => (
						<option key={course.id} value={course.id}>
							{course.fullname}
						</option>
					))}
				</select>
				<div className="input-group-append">
					<button className="btn btn-secondary" onClick={handleAddRequiredCourse}>
						Add
					</button>
				</div>
			</div>
			<div className="mt-2">
				{props.requiredCourses.length === 0 ? (
					<span className="text-muted">No required courses have been added.</span>
				) : (
					<span>
						<strong>Required Courses Added: </strong>
						{props.requiredCourses
							.map((courseId) => props.allCourses.find((c) => c.id === courseId)?.fullname || '')
							.join(', ')}
					</span>
				)}
			</div>
		</>
	);
};

export default RowEditRequiredCourses;
