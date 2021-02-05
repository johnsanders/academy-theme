import React from 'react';
import trainersInfo from './trainersInfo';

const Trainers: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="mb-5 text-center">Our specialist team of trainers</h1>
					<div className="mb-5 text-center">
						Access one of our subject matter experts from our portfolio of trainers and journalists.
						<br />
						<em className="text-muted">subject to availability and last-minute change</em>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				{trainersInfo.map((trainer) => (
					<div className="col-6 col-lg-4 col-xl-3 mb-5" key={trainer.name}>
						{trainer.image}
						<h3 className="mt-2">{trainer.name}</h3>
						<div>{trainer.description}</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default Trainers;
