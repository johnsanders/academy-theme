import React from 'react';
import audience from '../../../img/Audience.svg';
import camera from '../../../img/Video-camera.svg';
import identify from '../../../img/identify.svg';
import tvPhone from '../../../img/TV-Phone.svg';

const Video: React.FC = (): JSX.Element => (
	<div className="featureRow text-light" style={{ backgroundColor: '#18191A' }}>
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-12 col-md-9">
					<h1 className="text-center mb-5">What you will learn</h1>
				</div>
				<div className="col-12 col-md-9">
					<h5 className="text-center">
						This is a practical course that will provide the following skills required for producing
						multiplatform content:
					</h5>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-6 col-md-3 col-xl-2 text-center">
					<div className="mb-4">
						<img src={identify} />
					</div>
					<div>To identify a good story</div>
				</div>
				<div className="col-6 col-md-3 col-xl-2 text-center">
					<div className="mb-4">
						<img src={audience} />
					</div>
					<div>To tell a story that engages your audience</div>
				</div>
				<div className="col-6 col-md-3 col-xl-2 text-center">
					<div className="mb-4">
						<img src={tvPhone} />
					</div>
					<div>To produce content for different platforms</div>
				</div>
				<div className="col-6 col-md-3 col-xl-2 text-center">
					<div className="mb-4">
						<img src={camera} />
					</div>
					<div>To shoot and edit content like a pro</div>
				</div>
			</div>
		</div>
	</div>
);

export default Video;
