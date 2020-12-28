import { Course } from '../../../types';
import React from 'react';

interface Props {
	allCourses: Course[];
	handleAddRequiredCourse: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSelectedCourseChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	requiredCourses: string[];
	selectedCourse: Course;
}

const RowEditRequiredCourses: React.FC<Props> = (props: Props) => {
	return (
		<>
			<label htmlFor="requiredCourses">Select Required Course</label>
			<div className="input-group">
				<select
					className="form-control"
					id="requiredCourses"
					onChange={props.handleSelectedCourseChange}
					value={props.selectedCourse.id}
				>
					{props.allCourses.map((course) => (
						<option key={course.id} value={course.id}>
							{course.fullname}
						</option>
					))}
				</select>
				<div className="input-group-append">
					<button className="btn btn-secondary" onClick={props.handleAddRequiredCourse}>
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
