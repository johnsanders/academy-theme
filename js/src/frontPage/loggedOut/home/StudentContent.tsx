import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCamcorder } from '@fortawesome/pro-solid-svg-icons';

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
					<img
						src="https://picsum.photos/320/180?rand=1"
						style={{ maxWidth: '25vw', width: '300px' }}
					/>
					<h3 className="fontMedium mt-4 text-center">Student Production 1</h3>
					<div className="text-center">
						A few sentences here describing the student production. Lorem ipsum dolor sit amet. And
						other stuff like that.
					</div>
				</div>
			</div>
			<div className="col-12 col-md-4 mb-3 text-center">
				<img
					src="https://picsum.photos/320/180?rand=2"
					style={{ maxWidth: '25vw', width: '300px' }}
				/>
				<h3 className="fontMedium mt-4 text-center">Student Production 2</h3>
				<div className="text-center">
					A few sentences here describing the student production. Lorem ipsum dolor sit amet. And
					other stuff like that.
				</div>
			</div>
			<div className="col-12 col-md-4 mb-3 text-center">
				<img
					src="https://picsum.photos/320/180?rand=3"
					style={{ maxWidth: '25vw', width: '300px' }}
				/>
				<h3 className="fontMedium mt-4 text-center">Student Production 3</h3>
				<div className="text-center">
					A few sentences here describing the student production. Lorem ipsum dolor sit amet. And
					other stuff like that.
				</div>
			</div>
		</div>
	</div>
);

export default Delivery;
