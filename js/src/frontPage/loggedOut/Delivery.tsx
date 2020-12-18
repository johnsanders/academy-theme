import React from 'react';
import bootcamps from '../../img/bootcamps.png';
import onsiteCourses from '../../img/onsite_courses.jpg';
import webinars from '../../img/webinars.jpg';

const Delivery: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: '#f1f1f2' }}>
		<div className="mb-3" style={{ padding: '10em 0 10em 0' }}>
			<h1 className="text-center">Course Delivery</h1>
			<h5 className="text-center">CNN Academy offers a diverse array of courses and modules.</h5>
		</div>
		<div className="mx-5 row" style={{ paddingBottom: '7em' }}>
			<div className="col-sm-12 col-md-4 mb-3 text-center">
				<div className="text-center">
					<img src={onsiteCourses} style={{ maxWidth: '25vw', width: '300px' }} />
					<h3 className="fontMedium mt-4 text-center">On-site courses</h3>
					<div className="text-center">
						Our experts can deliver courses on-site with relevant modules for your business needs
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-4 mb-3 text-center">
				<img src={bootcamps} style={{ maxWidth: '25vw', width: '300px' }} />
				<h3 className="fontMedium mt-4 text-center">CNN Bootcamps</h3>
				<div className="text-center">
					In partnership with universities, a one-week course in a CNN bureau on journalism,
					production and broadcasting
				</div>
			</div>
			<div className="col-sm-12 col-md-4 mb-3 text-center">
				<img src={webinars} style={{ maxWidth: '25vw', width: '300px' }} />
				<h3 className="fontMedium mt-4 text-center">Webinars</h3>
				<div className="text-center">
					Our experts can deliver courses or conduct panel discussions
				</div>
			</div>
		</div>
	</div>
);

export default Delivery;
