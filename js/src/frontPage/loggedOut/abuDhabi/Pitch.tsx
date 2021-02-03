import React from 'react';

const Overview: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-12">
					<h1 className="text-center mb-5">What to include in your pitch?</h1>
				</div>
				<div className="col-12 col-md-6">
					Think about a subject or story you are passionate about and would want to share with a
					global audience. Then write a strong, clear, <span className="fontBlack">500-word </span>
					pitch telling us how your angle, or the way you want to present the story, is unique and
					timely.
				</div>
				<div className="col-12 col-md-6">
					<em className="d-block mb-4">Try answering the following questions in your pitch:</em>
					<ul>
						<li>What is your story?</li>
						<li>Why is it important for a global audience to learn about it?</li>
						<li>How is your angle unique?</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Overview;
