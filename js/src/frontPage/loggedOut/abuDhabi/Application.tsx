import React from 'react';
import beckyTunisia from '../../../img/becky_tunisia.jpg';

const Application: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-12 col-md-6">
					<h1 className="mb-3">What&apos;s the application process?</h1>
					<div className="mb-3">
						<span className="fontBlack">one/</span> Prepare a short video telling us about yourself
						and pitch us a story you would like to work on if you are accepted into CNN Academy.
					</div>
					<div className="mb-3">
						<span className="fontBlack">two/</span> Apply by October 31st 2020. Applications are now
						closed.
					</div>
					<div className="mb-3">
						<span className="fontBlack">three/</span> Shortlisted candidates will be invited to a
						virtual interview by a selection committee from CNN, twofour54 and Image Nation in
						November 2020.
					</div>
					<div className="mb-3">
						<span className="fontBlack">four/</span> Successful candidates will have until December
						15th 2020 to accept their place and submit any other additional documents.
					</div>
					<div className="mb-3">
						<span className="fontBlack">five/</span> CNN Academy Abu Dhabi commences on January 10th
						2021.
					</div>
				</div>
				<div className="col-12 col-md-6">
					<img className="w-100" src={beckyTunisia} />
				</div>
			</div>
		</div>
	</div>
);

export default Application;
