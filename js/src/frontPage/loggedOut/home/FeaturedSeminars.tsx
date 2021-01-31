import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPodiumStar } from '@fortawesome/pro-solid-svg-icons';

const FeaturedSeminars: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: 'white', padding: '7em 0' }}>
		<div className="text-center">
			<Icon className="fa-4x mb-3" icon={faPodiumStar} />
		</div>
		<h1 className="text-center mb-5">Preview Popular Seminars</h1>
		<div className="d-flex flex-wrap justify-content-center">
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Seminar Name</h5>
					<p className="card-text">
						This is the seminar description. It is a brief blurb about the subject of the seminar.
					</p>
				</div>
			</div>
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Seminar Name</h5>
					<p className="card-text">
						This is the seminar description. It is a brief blurb about the subject of the seminar.
					</p>
				</div>
			</div>
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Seminar Name</h5>
					<p className="card-text">
						This is the seminar description. It is a brief blurb about the subject of the seminar.
					</p>
				</div>
			</div>
			<div className="card m-1" style={{ width: '280px' }}>
				<img
					className="card-img-top"
					src={`https://picsum.photos/320/180?rand=${(Math.random() * 1000).toFixed(0)}`}
				/>
				<div className="card-body">
					<h5 className="card-title">Seminar Name</h5>
					<p className="card-text">
						This is the seminar description. It is a brief blurb about the subject of the seminar.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default FeaturedSeminars;
