import '../../shared/slickSlider.css';
import '../../shared/slickSliderTheme.css';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';
import trainersInfo from './trainersInfo';

const Trainers: React.FC = (): JSX.Element => {
	const sliderRef = React.useRef<Slider>();
	const [sliderIndex, setSliderIndex] = React.useState(0);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>): void => {
		e.preventDefault();
		let nextIndex = 0;
		if (e.currentTarget.id === 'sliderPrevious')
			nextIndex = sliderIndex - 1 >= 0 ? sliderIndex - 1 : trainersInfo.length - 1;
		else if (e.currentTarget.id === 'sliderNext' || e.currentTarget.id === 'sliderNext')
			nextIndex = sliderIndex + 1 < trainersInfo.length ? sliderIndex + 1 : 0;

		sliderRef.current && sliderRef.current.slickGoTo(nextIndex);
	};
	const beforeChange = (_current: number, next: number): void => setSliderIndex(next);
	return (
		<div style={{ backgroundColor: 'white', padding: '7em 2em' }}>
			<div className="row">
				<div className="col-xs-12 col-md-4 col-lg-3 offset-lg-1 offset-xl-2">
					<h1 className="mb-5"> Our specialist team of trainers</h1>
					<div className="mb-5">
						Access one of our subject matter experts from our portfolio of trainers and journalists.
						<br />
						<em className="text-muted">subject to availability and last-minute change</em>
					</div>
					<div className="mb-3">
						<h3>{trainersInfo[sliderIndex].name}</h3>
						{trainersInfo[sliderIndex].description}
					</div>
				</div>
				<div
					className="col-xs-12 col-md-8 col-lg-7 col-xl-5 mt-auto mb-auto"
					id="sliderContainer"
					onClick={handleClick}
				>
					<Slider
						arrows={false}
						beforeChange={beforeChange}
						infinite={false}
						ref={(el) => {
							if (el) sliderRef.current = el;
						}}
					>
						{trainersInfo.map((trainer) => trainer.image)}
					</Slider>
					<div className="mt-3">
						<button className="btn border-none" id="sliderPrevious" onClick={handleClick}>
							<Icon className="fa-3x" icon={faArrowAltCircleLeft} />
						</button>
						<button className="btn border-none" id="sliderNext" onClick={handleClick}>
							<Icon className="fa-3x" icon={faArrowAltCircleRight} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trainers;
