declare const M: MoodleJs;
import { MoodleJs } from '../types';
import React from 'react';
import bootcamps from '../img/bootcamps.png';
import education from '../img/education.svg';
import execEducation from '../img/exec_education.jpg';
import onsiteCourses from '../img/onsite_courses.jpg';
import professional from '../img/professional.svg';
import tvPhone from '../img/tv_phone.svg';
import webinars from '../img/webinars.jpg';

const LoggedOutContainer: React.FC = (): JSX.Element => {
	return (
		<>
			<div
				style={{
					height: '100vh',
					left: 0,
					overflow: 'hidden',
					top: 0,
					width: '100%',
				}}
			>
				<video
					autoPlay={true}
					className="w-100"
					loop={true}
					muted={true}
					src={`${M.cfg.wwwroot}/theme/academy/images/front_page_video.mp4`}
					style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }}
				/>
			</div>
			<div>
				<div style={{ margin: '7em 0 5em 0' }}>
					<h1 className="text-center">Learning with CNN</h1>
					<h5 className="text-center">CNN Academy serves three client segments</h5>
				</div>
				<div className="mx-5 row">
					<div className="col-xs-12 col-md-4 text-center">
						<div className="text-center">
							<img src={tvPhone} style={{ width: '150px' }} />
							<h3 className="fontMedium mt-4 text-center">
								Media training for media professionals
							</h3>
							<div className="fontBlack text-center mt-3">Typical Use Cases</div>
							<div className="text-center">
								- Setting up a news organisation <br />
								- Increasing TV engagement <br />
								- Transitioning from TV to digital <br />
								- Increasing audiences or monetising content <br />
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-md-4 text-center">
						<img src={education} style={{ width: '150px' }} />
						<h3 className="fontMedium mt-4 text-center">
							Journalism training for students and young professionals
						</h3>
						<div className="fontBlack text-center mt-3">Typical Use Cases</div>
						<div className="text-center">
							- CNN affiliation <br />
							- Latest in journalism <br />
							- Experimental learning via content creation <br />
						</div>
					</div>
					<div className="col-xs-12 col-md-4 text-center">
						<img src={professional} style={{ width: '150px' }} />
						<h3 className="fontMedium mt-4 text-center">
							Executive programmes for experienced professionals
						</h3>
						<div className="fontBlack text-center mt-3">Typical Use Cases</div>
						<div className="text-center">
							- Affiliation - access to content and training <br />
							- Credible, relevant speakers <br />
							- Experiential learning with subject matter experts <br />
						</div>
					</div>
				</div>
				<div
					className="row"
					style={{
						backgroundColor: '#18191A',
						color: 'white',
						margin: '8em 0 0 0',
						padding: '8em 2em',
					}}
				>
					<div className="col-xs-12 col-md-8">
						<img className="w-100" src={execEducation} />
					</div>
					<div className="col-xs-12 col-md-4">
						<h2 className="mb-3">Executive Education Modules</h2>
						<h4 className="mb-3">Executive education for experienced professionals</h4>
						<div>
							Please&nbsp;
							<a
								href="https://commercial.cnn.com/contact-us"
								style={{ color: 'white', textDecoration: 'underline' }}
							>
								contact our team
							</a>
							&nbsp; for more information on available courses.
						</div>
					</div>
				</div>
				<div style={{ backgroundColor: '#f1f1f2' }}>
					<div style={{ padding: '7em 0 5em 0' }}>
						<h1 className="text-center">Course Delivery</h1>
						<h5 className="text-center">
							CNN Academy offers a diverse array of courses and modules.
						</h5>
					</div>
					<div className="mx-5 row" style={{ paddingBottom: '7em' }}>
						<div className="col-xs-12 col-md-4 text-center">
							<div className="text-center">
								<img src={onsiteCourses} style={{ width: '300px' }} />
								<h3 className="fontMedium mt-4 text-center">On-site courses</h3>
								<div className="text-center">
									Our experts can deliver courses on-site with relevant modules for your business
									needs
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-md-4 text-center">
							<img src={bootcamps} style={{ width: '300px' }} />
							<h3 className="fontMedium mt-4 text-center">CNN Bootcamps</h3>
							<div className="text-center">
								In partnership with universities, a one-week course in a CNN bureau on journalism,
								production and broadcasting
							</div>
						</div>
						<div className="col-xs-12 col-md-4 text-center">
							<img src={webinars} style={{ width: '300px' }} />
							<h3 className="fontMedium mt-4 text-center">Webinars</h3>
							<div className="text-center">
								Our experts can deliver courses or conduct panel discussions
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoggedOutContainer;
