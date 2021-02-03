import CarouselItem from './Carouseltem';
import React from 'react';
import acadAd from '../../img/acad_ad.mp4';
import acadAdPoster from '../../img/acad_ad_poster.jpg';
import acadMain from '../../img/acad_main.mp4';
import acadMainPoster from '../../img/acad_main_poster.jpg';
import fakes from '../../img/fakes.mp4';
import fakesPoster from '../../img/fakes_poster.jpg';

const carouselItems = [
	{
		headline: <h1 className="text-light text-center fontMedium">The Art of Storytelling</h1>,
		poster: acadMainPoster,
		text: (
			<h4 className="text-light text-center" style={{ maxWidth: '20em' }}>
				From enterprising new ideas, to delivering the killer pitch, to executing your story in the
				field... this wide-ranging course delivers real-world skills from CNN&#8217;s top
				storytellers.
			</h4>
		),
		video: acadMain,
	},
	{
		headline: <h1 className="text-light text-center fontMedium">CNN Academy: Abu Dhabi</h1>,
		poster: acadAdPoster,
		text: (
			<h4 className="text-light text-center" style={{ maxWidth: '20em' }}>
				An intensive learning programme offers a full-time five-week course with a combination of
				online learning sessions and in-person workshops for Abu Dhabi&apos;s next generation of
				storytellers.
			</h4>
		),
		video: acadAd,
	},
	{
		headline: (
			<h1 className="text-light text-center fontMedium">Deep Fakes and Maniupulated Media</h1>
		),
		poster: fakesPoster,
		text: (
			<h4 className="text-light text-center" style={{ maxWidth: '20em' }}>
				CNN Tech Training offers an eye-opening course arming journalists with the skills to detect
				and defeat the fast-growing challenges of media manipulated with artificial intelligence
				applications.
			</h4>
		),
		video: fakes,
	},
];

interface Props {
	containerClassName?: string;
	handleReady: () => void;
}

const Carousel: React.FC<Props> = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const itemsInitedRef = React.useRef(0);
	const itemsToInit = 1;
	const handleInit = () => {
		itemsInitedRef.current += 1;
		if (itemsInitedRef.current === itemsToInit) props.handleReady();
	};
	React.useEffect(() => {
		const interval = setInterval(() => {
			const newActiveIndex = activeIndex >= carouselItems.length - 1 ? 0 : activeIndex + 1;
			setActiveIndex(newActiveIndex);
		}, 5000);
		return () => window.clearInterval(interval);
	}, [activeIndex]);
	return (
		<div className={props.containerClassName}>
			{carouselItems.map((item, i) => (
				<div className="position-relative" key={i}>
					<CarouselItem
						handleInit={handleInit}
						isIn={i === activeIndex}
						posterUrl={item.poster}
						videoUrl={item.video}
					>
						{item.headline}
						{item.text}
					</CarouselItem>
				</div>
			))}
		</div>
	);
};

export default Carousel;
