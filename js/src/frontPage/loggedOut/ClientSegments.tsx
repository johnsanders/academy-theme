import React from 'react';
import education from '../../img/education.svg';
import professional from '../../img/professional.svg';
import tvPhone from '../../img/tv_phone.svg';

const ClientSegments: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: 'white', padding: '10em 0' }}>
		<div style={{ paddingBottom: '5em' }}>
			<h1 className="text-center">Learning with CNN</h1>
			<h5 className="text-center">CNN Academy serves three client segments</h5>
		</div>
		<div className="mx-5 row">
			<div className="col-sm-12 col-md-4 text-center">
				<div className="text-center">
					<img src={tvPhone} style={{ width: '150px' }} />
					<h3 className="fontMedium mt-4 text-center">Media training for media professionals</h3>
					<div className="fontBlack text-center mt-3">Typical Use Cases</div>
					<div className="text-center">
						- Setting up a news organisation <br />
						- Increasing TV engagement <br />
						- Transitioning from TV to digital <br />
						- Increasing audiences or monetising content <br />
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-4 text-center">
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
			<div className="col-sm-12 col-md-4 text-center">
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
	</div>
);
export default ClientSegments;
