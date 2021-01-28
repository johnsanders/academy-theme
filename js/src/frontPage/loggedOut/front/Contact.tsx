import React from 'react';

const Contact: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: '#f1f1f2' }}>
		<div style={{ padding: '7em 0 5em 0' }}>
			<h1 className="text-center mb-5">Like to know more?</h1>
			<div className="text-center mb-5">
				Find out more about how we can tailor training solutions to your needs.
			</div>
			<div className="text-center">
				<a className="btn btn-dark" href="https://commercial.cnn.com/contact-us">
					Contact us
				</a>
			</div>
		</div>
	</div>
);

export default Contact;
