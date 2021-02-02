import React from 'react';
import heroPoster from '../../../img/heroPoster.jpg';
import heroVideo from '../../../img/hero.mp4';
import logoLight from '../../../img/logo_light.png';

const itemsToInit = 2;

interface Props {
	handleReady: () => void;
}

const Hero: React.FC<Props> = (props: Props): JSX.Element => {
	const itemsInitedRef = React.useRef(0);
	const handleInit = () => {
		itemsInitedRef.current += 1;
		if (itemsInitedRef.current === itemsToInit) props.handleReady();
	};
	return (
		<div
			style={{
				height: '100vh',
				left: 0,
				overflow: 'hidden',
				top: 0,
				width: '100%',
			}}
		>
			<video
				autoPlay={true}
				className="w-100"
				loop={true}
				muted={true}
				onCanPlayThrough={handleInit}
				onError={handleInit}
				poster={heroPoster}
				src={heroVideo}
				style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }}
			/>
			<div
				className="position-absolute "
				style={{
					background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
					height: '100vh',
					top: 0,
					width: '100vw',
				}}
			>
				<div className="container h-100">
					<div className="row h-100">
						<div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 d-flex flex-column justify-content-center align-items-center">
							<img
								alt="CNN Academy Logo"
								className="mb-5"
								onError={handleInit}
								onLoad={handleInit}
								src={logoLight}
								style={{ maxWidth: '90%', width: '500px' }}
							/>
							<h2 className="text-center text-light">
								Courses to develop best practices in cross-platform journalism, production and
								broadcasting
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
