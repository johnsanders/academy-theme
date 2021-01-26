import React from 'react';
import heroPoster from '../../img/heroPoster.jpg';
import heroVideo from '../../img/hero.mp4';

const itemsToInit = 1;

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
		<div className="row" style={{ marginTop: '100px', overflow: 'hidden', position: 'relative' }}>
			<div style={{ left: 0, position: 'absolute', top: 0 }}>
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					onCanPlayThrough={handleInit}
					onError={handleInit}
					poster={heroPoster}
					src={heroVideo}
					style={{
						filter: 'blur(40px) brightness(0.6)',
						width: '100%',
					}}
				/>
			</div>
			<div className="col-12 col-md-6 d-flex align-items-center justify-content-center px-5">
				<h2 className="text-light text-center" style={{ maxWidth: '20em' }}>
					Courses to develop best practices in cross-platform journalism, production and
					broadcasting
				</h2>
			</div>
			<div className="col-12 col-md-6 text-center p-0">
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					onCanPlayThrough={handleInit}
					onError={handleInit}
					poster={heroPoster}
					src={heroVideo}
					style={{ transform: 'scale(1.025)', width: '100%' }}
				/>
			</div>
		</div>
	);
};

export default Hero;
