import React from 'react';

const Contact: React.FC = (): JSX.Element => (
	<div style={{ backgroundColor: '#f1f1f2' }}>
		<div style={{ padding: '7em 0 5em 0' }}>
			<div className="text-center mb-5">
				لأية أسئلة بخصوص أكاديمية CNN أبوظبي أو عملية التقديم، يرجى إرسال بريد إلكتروني إلى:
			</div>
			<div className="text-center">
				<a className="btn btn-dark" href="mailto:commercial.cnn.com/contact-us">
					CNNAcademy@cnn.com
				</a>
			</div>
		</div>
	</div>
);

export default Contact;
