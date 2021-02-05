import CarouselItem from './Carouseltem';
import React from 'react';
import carouselItems from './carouselItems';

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
		}, 10000);
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
						tags={item.tags}
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
