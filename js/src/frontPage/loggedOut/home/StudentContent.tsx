import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCamcorder } from '@fortawesome/pro-solid-svg-icons';

const Delivery: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="text-center">
				<Icon className="fa-4x mb-3" icon={faCamcorder} />
			</div>
			<h1 className="text-center">Recent Student Productions</h1>
			<h5 className="text-center mb-5">
				CNN Academy students learn to create industry-leading content
			</h5>
			<div className="row justify-content-center">
				<div className="col-12 col-md-4 text-center m-4">
					<img src="https://picsum.photos/320/180?rand=1" style={{ width: '300px' }} />
					<h3 className="fontMedium mt-4 text-center">Student Production 1</h3>
					<div className="text-center">
						A few sentences here describing the student production. Lorem ipsum dolor sit amet. And
						other stuff like that.
					</div>
				</div>
				<div className="col-12 col-md-4 text-center m-4">
					<img src="https://picsum.photos/320/180?rand=2" style={{ width: '300px' }} />
					<h3 className="fontMedium mt-4 text-center">Student Production 2</h3>
					<div className="text-center">
						A few sentences here describing the student production. Lorem ipsum dolor sit amet. And
						other stuff like that.
					</div>
				</div>
				<div className="col-12 col-md-4 text-center m-4">
					<img src="https://picsum.photos/320/180?rand=3" style={{ width: '300px' }} />
					<h3 className="fontMedium mt-4 text-center">Student Production 3</h3>
					<div className="text-center">
						A few sentences here describing the student production. Lorem ipsum dolor sit amet. And
						other stuff like that.
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Delivery;
