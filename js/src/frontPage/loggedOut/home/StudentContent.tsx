import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCamcorder } from '@fortawesome/pro-solid-svg-icons';

const Delivery: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="text-center">
				<Icon className="fa-4x mb-3" icon={faCamcorder} />
			</div>
			<h1 className="text-center">Recent Student Productions</h1>
			<h5 className="text-center mb-5">
				CNN Academy students learn to create industry-leading content
			</h5>
			<div className="row justify-content-center">
				<div className="col-12 col-md-4 text-center">
					<iframe
						allow="autoplay; fullscreen; picture-in-picture"
						className="mt-5 mt-md-0"
						frameBorder="0"
						src="https://player.vimeo.com/video/508403845"
						width="100%"
					/>
					<h3 className="fontMedium mt-2 text-center">Lest We Forget</h3>
					<div className="text-center">
						A young Emirati explores efforts to rediscover and preserve her nation&apos;s history
						even as it races into the future.
					</div>
				</div>
				<div className="col-12 col-md-4 text-center">
					<iframe
						allow="autoplay; fullscreen"
						className="mt-5 mt-md-0"
						frameBorder="0"
						src="https://player.vimeo.com/video/508404342"
						width="100%"
					></iframe>
					<h3 className="fontMedium mt-2 text-center">Rediscovering Roots</h3>
					<div className="text-center">
						A CNN Abu Dhabi intern delves into the history of the Arabic language as one of her
						first broadcast industry productions.
					</div>
				</div>
				<div className="col-12 col-md-4 text-center">
					<iframe
						allow="autoplay; fullscreen"
						className="mt-5 mt-md-0"
						frameBorder="0"
						src="https://player.vimeo.com/video/508404084"
						width="100%"
					></iframe>
					<h3 className="fontMedium mt-2 text-center">My Abaya and Me</h3>
					<div className="text-center">
						A CNN Academy student looks at the intersection of culture, fashion and identity.
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Delivery;
