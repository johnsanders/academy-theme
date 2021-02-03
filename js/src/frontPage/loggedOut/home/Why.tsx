import React from 'react';
import education from '../../../img/education.svg';
import professional from '../../../img/professional.svg';
import tvPhone from '../../../img/tv_phone.svg';

const Why: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="mb-5 text-center">Why CNN Academy?</h1>
				</div>
				<div className="col-12 col-md-4 text-center">
					<div className="text-center">
						<img src={tvPhone} style={{ width: '150px' }} />
						<h3 className="fontMedium mt-4 text-center">Media training for media professionals</h3>
						<div className="text-center">
							- Setting up a news organisation <br />
							- Increasing TV engagement <br />
							- Transitioning from TV to digital <br />
							- Increasing audiences or monetising content <br />
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 text-center">
					<img src={education} style={{ width: '150px' }} />
					<h3 className="fontMedium mt-4 text-center">
						Journalism training for students and young professionals
					</h3>
					<div className="text-center">
						- CNN affiliation <br />
						- Latest in journalism <br />
						- Experimental learning via content creation <br />
					</div>
				</div>
				<div className="col-12 col-md-4 text-center">
					<img src={professional} style={{ width: '150px' }} />
					<h3 className="fontMedium mt-4 text-center">
						Executive programmes for experienced professionals
					</h3>
					<div className="text-center">
						- Affiliation - access to content and training <br />
						- Credible, relevant speakers <br />
						- Experiential learning with subject matter experts <br />
					</div>
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
