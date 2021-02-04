import React from 'react';

const Overview: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-md-6">
					<iframe
						allow="autoplay; fullscreen; picture-in-picture"
						frameBorder="0"
						height="100%"
						src="https://player.vimeo.com/video/507994481"
						width="100%"
					/>
				</div>
				<div className="col-12 col-md-6">
					<h1>Who can apply?</h1>
					<div className="mb-3">
						CNN Academy Abu Dhabi will only accept applications from UAE nationals and residents
						over the age of 21 who have a background and/or interest in media and multiplatform
						storytelling.
					</div>
					<div>
						CNN Academy Abu Dhabi is a full-time five-week course. Successful applicants will have
						to attend online lectures and in-person workshops throughout the duration of the
						program, while adhering to any and all social distancing rules that might be in place in
						January 2021.
					</div>
					<div>Applicants must be proficient in written and spoken English.</div>
				</div>
			</div>
		</div>
	</div>
);

export default Overview;
