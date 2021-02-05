import React from 'react';
import education from '../../../img/education.svg';
import hubLogo from '../../../img/hub_logo_bw.png';
import professional from '../../../img/professional.svg';
import tvPhone from '../../../img/tv_phone.svg';

const Why: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="mb-5 text-center">Why CNN Academy?</h1>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div
						className="d-flex align-items-end justify-content-center"
						style={{ height: '150px' }}
					>
						<img src={hubLogo} style={{ width: '200px' }} />
					</div>
					<h3 className="fontMedium mt-4 text-center">CNN&apos;s e-Learning platform</h3>
					<ul>
						<li>Self-paced courses on journalism best practice</li>
						<li>Live seminars from CNN journalists and signature talent</li>
						<li>Interactive modules with tracked assessment and clear student learning outcomes</li>
					</ul>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="text-center">
						<img src={tvPhone} style={{ width: '150px' }} />
					</div>
					<h3 className="fontMedium mt-4 text-center">Media training for media professionals</h3>
					<ul>
						<li>Setting up a news organisation</li>
						<li>Increasing TV engagement</li>
						<li>Transitioning from TV to digital </li>
						<li>Increasing audiences or monetising content</li>
					</ul>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="text-center">
						<img src={education} style={{ width: '150px' }} />
					</div>
					<h3 className="fontMedium mt-4 text-center">
						Journalism training for students and young professionals
					</h3>
					<ul>
						<li>CNN affiliation</li>
						<li>Latest in journalism </li>
						<li>Experimental learning via content creation</li>
					</ul>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="text-center">
						<img src={professional} style={{ width: '150px' }} />
					</div>
					<h3 className="fontMedium mt-4 text-center">
						Executive programmes for experienced professionals
					</h3>
					<ul>
						<li>Affiliation - access to content and training</li>
						<li>Credible, relevant speakers</li>
						<li>Experiential learning with subject matter experts </li>
					</ul>
				</div>
			</div>
			<div className="mt-5 text-center">
				<a className="btn btn-primary btn-lg text-light" href="?page=whycnn">
					Learn More
				</a>
			</div>
		</div>
	</div>
);
export default Why;
