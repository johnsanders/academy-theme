import { faBooks, faGlobe, faGraduationCap } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import hubLogo from '../../../img/hub_logo_bw.png';

const Why: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="mb-5 text-center">Why CNN Academy?</h1>
				</div>
				<div className="col-12 col-md-6 col-lg-3 reatureRowItem mb-5 mb-md-0">
					<div
						className="d-flex align-items-center justify-content-center mb-3"
						style={{ height: '100px' }}
					>
						<img src={hubLogo} style={{ width: '200px' }} />
					</div>
					<ul>
						<li>Self-paced courses on journalism best practice</li>
						<li>Live seminars from CNN journalists and signature talent</li>
						<li>Interactive modules with tracked assessment and clear student learning outcomes</li>
					</ul>
				</div>
				<div className="col-12 col-md-6 col-lg-3 featureRowItem mb-5 mb-md-0">
					<Icon className="fa-4x" icon={faGraduationCap} />
					<h3 className="fontMedium mt-sm-1 mt-md-4 text-center">Proven Pedagogy</h3>
					<div className="text-center">A decades-long track record of training journalists.</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3 featureRowItem mb-5 mb-md-0">
					<Icon className="fa-4x" icon={faBooks} />
					<h3 className="fontMedium mt-sm-1 mt-md-4 text-center">Engaging Curriculums</h3>
					<div className="text-center">
						Programs feature industry-leading talent and experiential learning.
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3 featureRowItem mb-5 mb-md-0">
					<Icon className="fa-4x" icon={faGlobe} />
					<h3 className="fontMedium mt-sm-1 mt-md-4 text-center">Journalism Excellence</h3>
					<div className="text-center">
						Unrivalled brand recognition underpinned with trust and credibility.
					</div>
				</div>
			</div>
		</div>
		<div className="mt-5 text-center">
			<a className="btn btn-primary btn-lg text-light" href="?page=whycnn">
				Learn More
			</a>
		</div>
	</div>
);
export default Why;
