import React from 'react';

const Video: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-12 col-md-9">
					<h1 className="text-center mb-5">Course curriculum</h1>
				</div>
				<div className="col-12 col-md-6">
					<div className="fontBlack mb-2">Week One (Virtual: Sunday 10 – Thursday January 14)</div>
					<ul className="mb-5">
						<li>Orientation &amp; Introduction</li>
						<li>CNN Ethics Seminar</li>
					</ul>
					<div className="fontBlack mb-2">Week Two (Virtual: Sunday 17 – Thursday January 21)</div>
					<ul className="mb-5">
						<li>Social Media Best Practices </li>
						<li>Mobile Journalism</li>
					</ul>
					<div className="fontBlack mb-2">
						Week Three (Virtual: Sunday 24 – Thursday January 28)
					</div>
					<ul className="mb-5 mb-md-0">
						<li>The Art of the Interview</li>
						<li> CNN Arabic and Arabic Media Landscape</li>
					</ul>
				</div>
				<div className="col-12 col-md-6">
					<div className="fontBlack mb-2">Week Four (Sunday January 31 – Thursday February 4)</div>
					<ul className="mb-5">
						<li>Producing Live Television</li>
						<li>News Technical Operations &amp; Broadcast Engineering</li>
					</ul>
					<div className="fontBlack mb-2">Week Five (Sunday 7 – Thursday February 11)</div>
					<ul>
						<li>Editing Room</li>
						<li> Graduation Ceremony</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Video;
