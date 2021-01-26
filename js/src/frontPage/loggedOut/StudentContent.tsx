import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bootcamps from '../../img/bootcamps.png';
import { faCamcorder } from '@fortawesome/pro-solid-svg-icons';
import onsiteCourses from '../../img/onsite_courses.jpg';
import webinars from '../../img/webinars.jpg';

const Delivery: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: '#f1f1f2' }}>
		<div className="mb-3" style={{ padding: '5em 0' }}>
			<div className="text-center">
				<Icon className="fa-4x mb-3" icon={faCamcorder} />
			</div>
			<h1 className="text-center">Recent Student Productions</h1>
			<h5 className="text-center">CNN Academy students learn to create industry-leading content</h5>
		</div>
		<div className="mx-5 row" style={{ paddingBottom: '7em' }}>
			<div className="col-12 col-md-4 mb-3 text-center">
				<div className="text-center">
					<img src={onsiteCourses} style={{ maxWidth: '25vw', width: '300px' }} />
					<h3 className="fontMedium mt-4 text-center">On-site courses</h3>
					<div className="text-center">
						Our experts can deliver courses on-site with relevant modules for your business needs
					</div>
				</div>
			</div>
			<div className="col-12 col-md-4 mb-3 text-center">
				<img src={bootcamps} style={{ maxWidth: '25vw', width: '300px' }} />
				<h3 className="fontMedium mt-4 text-center">CNN Bootcamps</h3>
				<div className="text-center">
					In partnership with universities, a one-week course in a CNN bureau on journalism,
					production and broadcasting
				</div>
			</div>
			<div className="col-12 col-md-4 mb-3 text-center">
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
