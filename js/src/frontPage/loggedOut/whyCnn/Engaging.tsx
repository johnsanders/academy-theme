import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bootcamps from '../../../img/bootcamps.png';
import { faQuoteLeft } from '@fortawesome/pro-solid-svg-icons';

const quoteStyle: React.CSSProperties = {
	color: '#CC0000',
	display: 'inline',
	left: 0,
	top: 0,
};

const Engaging: React.FC = () => (
	<>
		<div className="row featureRow">
			<div className="col-12 text-center">
				<img className="featureRowImage mb-5" src={bootcamps} />
			</div>
			<div className="col-12 mb-3">
				<h2 className="text-center">CNN Academy programs are engaging and experiential.</h2>
			</div>
			<div className="col-12">
				<h5 className="text-left">CNN Academy Abu Dhabi: Student Feedback</h5>
			</div>
			<div className="row align-items-center">
				<div className="col-12 col-md-4 featureRowItem d-relative text-left">
					<div className="d-flex align-items-center mb-5">
						<Icon className="fa-3x mr-2" icon={faQuoteLeft} style={quoteStyle} />
						<h5>
							<em>CNN Academy taught me how to find, pitch and produce a story.</em>
						</h5>
					</div>
					<div className="d-flex align-items-center mb-5">
						<Icon className="fa-3x mr-2" icon={faQuoteLeft} style={quoteStyle} />
						<h5>
							<em>
								Had the right balance between live seminars and self-learning courses on CNN Academy
								Hub
							</em>
						</h5>
					</div>
					<div className="d-flex align-items-center">
						<Icon className="fa-3x mr-2" icon={faQuoteLeft} style={quoteStyle} />
						<h5>
							<em>
								In all honesty, I could write pages upon pages on what I&apos;ve learned during the
								program
							</em>
						</h5>
					</div>
				</div>
				<div className="col-12 col-md-4 featureRowItem" style={{ border: 'none' }}>
					<div className="text-left">
						<h1 className="fontBlack mb-0" style={{ color: '#CC0000' }}>
							100%
						</h1>
						<h5 className="mb-4">Participants believe program enhanced their journalism skills</h5>
					</div>
					<div className="text-left">
						<h1 className="fontBlack mb-0" style={{ color: '#CC0000' }}>
							100%
						</h1>
						<h5 className="mb-4">
							Participants were able to apply skills acquired to a tangible final project
						</h5>
					</div>
					<div className="text-left">
						<h1 className="fontBlack mb-0" style={{ color: '#CC0000' }}>
							75%
						</h1>
						<h5 className="mb-4">Participants said the program exceeded their expectations</h5>
					</div>
				</div>
				<div className="col-12 col-md-4 featureRowItem">
					<ul className="text-left">
						<li className="mb-3">
							Our curriculum combines virtual live seminars with engaging courses on journalism best
							practices
						</li>
						<li>
							CNN Academy Hub is a platform for students to undertake self- pacedlearning,
							attendlive sessions and provide program feedback. We frequently track student
							engagement and satisfaction.
						</li>
						<li>
							The experiential bootcamp allows participants to apply Academy Hub lessons to a
							project/news story and features on CNN subject to editorial feedback
						</li>
					</ul>
				</div>
			</div>
		</div>
	</>
);

export default Engaging;
