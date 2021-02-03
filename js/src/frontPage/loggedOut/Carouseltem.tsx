import React from 'react';

const inStyle: React.CSSProperties = {
	transform: 'translate3d(0, 0, 0)',
};
const leftOutStyle: React.CSSProperties = {
	transform: 'translate3d(-100%, 0, 0)',
};
const rightOutStyle: React.CSSProperties = {
	transform: 'translate3d(100%, 0, 0)',
};

interface Props {
	handleInit: () => void;
	isIn: boolean;
	posterUrl: string;
	videoUrl: string;
}

const CarouselItem: React.FC<React.PropsWithChildren<Props>> = (
	props: React.PropsWithChildren<Props>,
): JSX.Element => {
	const vidRef = React.useRef<HTMLVideoElement>();
	const bgVidRef = React.useRef<HTMLVideoElement>();
	const { isIn } = props;
	React.useEffect(() => {
		if (isIn) {
			vidRef.current?.play();
			bgVidRef.current?.play();
		} else {
			const timeout = setTimeout(() => {
				console.log(vidRef.current);
				vidRef.current?.pause();
				bgVidRef.current?.pause();
			}, 1000);
			return () => clearTimeout(timeout);
		}
	}, [isIn]);
	return (
		<div className="row m-0 w-100" style={{ overflow: 'hidden', position: 'absolute' }}>
			<div style={{ left: '-15%', position: 'absolute', top: '-15%', width: '70%' }}>
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					onCanPlayThrough={props.handleInit}
					onError={props.handleInit}
					poster={props.posterUrl}
					ref={(el) => {
						if (el) bgVidRef.current = el;
					}}
					src={props.videoUrl}
					style={{
						filter: 'blur(40px) brightness(0.6)',
						transition: 'transform 1s',
						width: '100%',
						...(isIn ? inStyle : leftOutStyle),
					}}
				/>
			</div>
			<div
				className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center px-5"
				style={{ transition: 'transform 1s', ...(props.isIn ? inStyle : leftOutStyle) }}
			>
				{props.children}
			</div>
			<div className="col-12 col-md-6 text-center p-0">
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					poster={props.posterUrl}
					ref={(el) => {
						if (el) vidRef.current = el;
					}}
					src={props.videoUrl}
					style={{
						height: '100%',
						transform: 'scale(1.025)',
						transition: 'transform 1s',
						width: '100%',
						...(isIn ? inStyle : rightOutStyle),
					}}
				/>
			</div>
		</div>
	);
};

export default CarouselItem;
