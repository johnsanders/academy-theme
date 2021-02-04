import React from 'react';
import abuDhabiLogo from '../../../img/abudhabi_logo.png';
import heroPoster from '../../../img/heroPoster.jpg';
import heroVideo from '../../../img/abudhabi.mp4';

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
				<div className="h-100 d-flex justify-content-center align-items-center">
					<img
						alt="CNN Academy Logo"
						className="mb-5"
						onError={handleInit}
						onLoad={handleInit}
						src={abuDhabiLogo}
						style={{ maxWidth: '90%', width: '400px' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
