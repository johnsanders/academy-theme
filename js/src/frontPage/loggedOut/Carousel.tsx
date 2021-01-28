import CarouselItem from './Carouseltem';
import React from 'react';
import heroPoster from '../../img/heroPoster.jpg';
import heroVideo from '../../img/hero.mp4';

interface Props {
	handleReady: () => void;
}

const Hero: React.FC<Props> = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const [isIn, setIsIn] = React.useState(true);
	const itemsInitedRef = React.useRef(0);
	const itemsToInit = 1;
	const handleInit = () => {
		itemsInitedRef.current += 1;
		if (itemsInitedRef.current === itemsToInit) props.handleReady();
	};
	React.useEffect(() => {
		const interval = setInterval(() => {
			setIsIn(!isIn);
		}, 5000);
		return () => window.clearInterval(interval);
	}, [isIn]);
	return (
		<CarouselItem handleInit={handleInit} isIn={isIn} posterUrl={heroPoster} videoUrl={heroVideo}>
			<h1 className="text-light text-center" style={{ fontFamily: 'CNNSansMedium' }}>
				The Art of Storytelling
			</h1>
			<h4 className="text-light text-center" style={{ maxWidth: '20em' }}>
				From enterprising new ideas, to delivering the killer pitch, to executing your story in the
				field... this wide-ranging course delivers real-world skills from CNN&#8217;s top
				storytellers.
			</h4>
		</CarouselItem>
	);
};

export default Hero;
