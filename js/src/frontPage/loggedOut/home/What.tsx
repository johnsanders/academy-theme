import React from 'react';

const Why: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="mb-5 text-center">What Is CNN Academy?</h1>
				</div>
				<div className="col-12 col-md-6 mb-5 mb-md-0 d-flex align-items-center">
					<h4 className="text-center">
						Courses to develop best practices in cross-platform journalism, production and
						broadcasting
					</h4>
				</div>
				<div className="col-12 col-md-6 mb-5 mb-md-0">
					<iframe
						allow="autoplay; fullscreen; picture-in-picture"
						frameBorder="0"
						src="https://player.vimeo.com/video/507988883"
						style={{ minHeight: '20em' }}
						width="100%"
					/>
				</div>
			</div>
		</div>
		<div className="mt-5 text-center">
			<a className="btn btn-primary btn-lg text-light" href="?page=whycnn">
				Contact Us
			</a>
		</div>
	</div>
);
export default Why;
