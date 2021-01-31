import React from 'react';
import execEducation from '../../../img/exec_education.jpg';

const Pedagogy: React.FC = () => (
	<div className="row featureRow">
		<div className="col-12 text-center">
			<img className="featureRowImage mb-5" src={execEducation} />
		</div>
		<div className="col-12">
			<h2 className="text-center mb-5">
				We have a proven pedagogy, having trained 1,248 CNN Fellows and many more.
			</h2>
		</div>
		<div className="row">
			<div className="col-12 col-md-4 featureRowItem">
				<h3 className="fontMedium my-4 text-center">CNN Fellowship Program</h3>
				<h1 className="fontBlack mb-0" style={{ color: '#CC0000' }}>
					1,248
				</h1>
				<h2 className="mb-3">Fellows (Students)</h2>
				<h1 className="fontBlack mb-0" style={{ color: '#CC0000' }}>
					401
				</h1>
				<h2 className="mb-3">News Organisations</h2>
				<h1 className="fontBlack mb-0" style={{ color: '#CC0000' }}>
					137
				</h1>
				<h2>Countries</h2>
			</div>
			<div className="col-12 col-md-4 featureRowItem">
				<h3 className="fontMedium mt-4 text-center">On-site professional training</h3>
				<h5 className="text-center mb-4">Proven education programs from industry leaders</h5>
				<ul className="text-left">
					<li className="mb-3">
						CNN trained affiliates at CNN Brasil and CNN Philippines on broadcast journalism,
						newsgathering best practices and reporting from the field.
					</li>
					<li className="mb-3">
						CNN provides bespoke training programs for media groups such as Expressen, a legacy
						publisher established in 1944 in Sweden. They approached CNN to license content and
						build capabilities in multiplatform journalisma.
					</li>
					<li>
						CNN trained CCTV&apos;s English-language channels on creating multiplatform content and
						operational workflows.
					</li>
				</ul>
			</div>
			<div className="col-12 col-md-4 featureRowItem">
				<h3 className="fontMedium mt-4 text-center">University Bootcamps</h3>
				<h5 className="text-center mb-4">
					Unrivalled brand recognition underpinned with trust and credibility.
				</h5>
				<ul className="text-left">
					<li className="mb-3">
						CNN partners with universities around the world to deliver Bootcamps and experiential
						training.
					</li>
					<li>
						CNN Academy Abu Dhabi provided theoretical and practical training for participants
						joining the program from across the UAE.
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Pedagogy;
