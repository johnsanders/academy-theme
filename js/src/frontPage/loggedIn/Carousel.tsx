declare const cnnAcademy: MoodleAcademy;
import '../../shared/slickSlider.css';
import '../../shared/slickSliderTheme.css';
import { MoodleAcademy } from '../../types';
import React from 'react';
import Slider from 'react-slick';

const Carousel: React.FC = (): JSX.Element => {
	const settings = {
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
			{cnnAcademy.carousel.map((item) => (
				<a href={item.targetUrl} key={item.id}>
					<img className="carouselImg" src={item.url} />
				</a>
			))}
		</Slider>
	);
};

export default Carousel;