import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faUsersClass } from '@fortawesome/pro-solid-svg-icons';

const FeaturedCourses: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: '#f1f1f2', padding: '7em' }}>
		<div className="text-center">
			<Icon className="fa-4x mb-3" icon={faUsersClass} />
		</div>
		<h1 className="text-center mb-5">Explore Featured Courses</h1>
		<div className="d-flex flex-wrap justify-content-center">
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Course Name</h5>
					<p className="card-text">
						This is the course description. It is a brief blurb about the subject of the course.
					</p>
				</div>
			</div>
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Course Name</h5>
					<p className="card-text">
						This is the course description. It is a brief blurb about the subject of the course.
					</p>
				</div>
			</div>
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Course Name</h5>
					<p className="card-text">
						This is the course description. It is a brief blurb about the subject of the course.
					</p>
				</div>
			</div>
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Course Name</h5>
					<p className="card-text">
						This is the course description. It is a brief blurb about the subject of the course.
					</p>
				</div>
			</div>
		</div>
	</div>
);
export default FeaturedCourses;
