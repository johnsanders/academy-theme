import React from 'react';

const Overview: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-md-6">
					<h1>Course overview</h1>
					<div className="mb-3">
						Through online workshops and webinar sessions with senior CNN journalists, participants
						will learn how CNN gathers information, verifies sources and produces content for its
						multiple platforms. During in-person workshops at CNN Abu Dhabi, participants will get a
						behind-the-scene look at the production of the network’s flagship current affairs show,
						Connect the World with Becky Anderson, live from CNN Abu Dhabi.
					</div>
					<div>
						Throughout the course, participants will also work on producing their own multiplatform
						content. They will pitch a story idea, get it approved, work with a team of professional
						photographers and editors to shoot and edit it, script and present it. The best content
						will be featured on CNN. CNN Academy Abu Dhabi is tuition-free, however, participants
						need to ensure they can attend the five-week program full time.
					</div>
				</div>
				<div className="col-12 col-md-6">
					<iframe
						allow="autoplay; fullscreen; picture-in-picture"
						frameBorder="0"
						height="100%"
						src="https://player.vimeo.com/video/507988883"
						width="100%"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Overview;
