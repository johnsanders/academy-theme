import React from 'react';
import { getInstructorById } from '../../shared/getById';

interface Props {
	instructors: string[];
}

const RowItemTags: React.FC<Props> = (props: Props) => (
	<div className="instructorsContainer">
		{props.instructors.map((instructorId) => {
			const instructor = getInstructorById(instructorId);
			if (!instructor) return null;
			return (
				<a href={instructor.bioUrl} key={instructor.id}>
					<img
						className="avatar"
						data-tip={`Instructor: ${instructor.name}`}
						src={instructor.avatarUrl}
					/>
				</a>
			);
		})}
	</div>
);

export default RowItemTags;
