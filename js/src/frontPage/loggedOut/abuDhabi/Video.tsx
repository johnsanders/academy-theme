import React from 'react';

const Video: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row align-items-center justify-content-center">
				<div className="col-12 col-md-9">
					<h1 className="text-center mb-5">What is the short video introduction?</h1>
				</div>
				<div className="col-12 col-md-9 text-center mb-5">
					At CNN Academy Abu Dhabi, you will have the opportunity to learn about multiplatform
					storytelling and meet and interact with CNN journalists as well as guest speakers from
					across the industry. We want to learn a bit about you.
				</div>
				<div className="col-12 col-md-9 text-center mb-5">
					So, send us a <span className="fontBlack">minute-long</span> video telling us who you are,
					what you are passionate about and why you are the right candidate to be selected for CNN
					Academy Abu Dhabi. Keep it short but creative.
				</div>
				<div className="col-12 text-center">Maximum file size: 100MB</div>
			</div>
		</div>
	</div>
);

export default Video;
