import '../../shared/slickSlider.css';
import '../../shared/slickSliderTheme.css';
import Slider, { Settings } from 'react-slick';
import { CarouselItem } from '../../types';
import React from 'react';

interface Props {
	handleInit: () => void;
	items: CarouselItem[];
}

const Carousel: React.FC<Props> = (props: Props): JSX.Element => {
	const imgLoadRef = React.useRef(0);
	const handleImgLoad = () => {
		imgLoadRef.current += 1;
		if (imgLoadRef.current === props.items.length) props.handleInit();
	};
	const settings: Settings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		infinite: true,
		pauseOnHover: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 500,
	};
	return (
		<Slider {...settings}>
			{props.items.map((item) => (
				<a href={item.targetUrl} key={item.id}>
					<img className="carouselImg" onLoad={handleImgLoad} src={item.url} />
				</a>
			))}
		</Slider>
	);
};

export default Carousel;
