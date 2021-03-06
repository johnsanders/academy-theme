import React from 'react';
import execEducation from '../../../img/exec_education.jpg';

const ExecEducation: React.FC = (): JSX.Element => (
	<div
		className="row mx-0"
		style={{
			backgroundColor: '#18191A',
			color: 'white',
			padding: '12em 3em',
		}}
	>
		<div className="col-12 col-md-8">
			<img className="w-100" src={execEducation} />
		</div>
		<div className="col-12 col-md-4">
			<h2 className="my-3">Executive Education Modules</h2>
			<h4 className="mb-3">Executive education for experienced professionals</h4>
			<div>
				Please&nbsp;
				<a
					href="https://commercial.cnn.com/contact-us"
					style={{ color: 'white', textDecoration: 'underline' }}
				>
					contact our team
				</a>
				&nbsp; for more information on available courses.
			</div>
		</div>
	</div>
);

export default ExecEducation;
