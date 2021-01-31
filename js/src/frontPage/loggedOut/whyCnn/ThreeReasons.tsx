import { faBooks, faGlobe, faGraduationCap } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ThreeReasons: React.FC = () => (
	<div className="row featureRow">
		<div className="col-12 col-md-4 featureRowItem">
			<Icon className="fa-4x" icon={faGraduationCap} />
			<h3 className="fontMedium mt-4 text-center">Proven Pedagogy</h3>
			<div className="text-center">A decades-long track record of training journalists.</div>
		</div>
		<div className="col-12 col-md-4 featureRowItem">
			<Icon className="fa-4x" icon={faBooks} />
			<h3 className="fontMedium mt-4 text-center">Engaging Curriculums</h3>
			<div className="text-center">
				Programs feature industry-leading talent and experiential learning.
			</div>
		</div>
		<div className="col-12 col-md-4 featureRowItem">
			<Icon className="fa-4x" icon={faGlobe} />
			<h3 className="fontMedium mt-4 text-center">Journalism Excellence</h3>
			<div className="text-center">
				Unrivalled brand recognition underpinned with trust and credibility.
			</div>
		</div>
	</div>
);

export default ThreeReasons;
