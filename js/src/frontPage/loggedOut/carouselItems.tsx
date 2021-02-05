import React from 'react';
import { Tag } from '../../types';
import acadAd from '../../img/acad_ad.mp4';
import acadAdPoster from '../../img/acad_ad_poster.jpg';
import acadMain from '../../img/acad_main.mp4';
import acadMainPoster from '../../img/acad_main_poster.jpg';
import fakes from '../../img/fakes.mp4';
import fakesPoster from '../../img/fakes_poster.jpg';

interface CarouselItem {
	headline: JSX.Element;
	poster: string;
	tags: Tag[];
	text: JSX.Element;
	video: string;
}

const carouselItems: CarouselItem[] = [
	{
		headline: <h1 className="text-light text-center fontMedium">The Art of Storytelling</h1>,
		poster: acadMainPoster,
		tags: [
			{
				color: 'red',
				id: '1',
				name: 'New',
				thumbUrl: '',
			},
			{
				color: 'lightblue',
				id: '2',
				name: 'Popular',
				thumbUrl: '',
			},
		],
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
		tags: [
			{
				color: 'lightblue',
				id: '5',
				name: 'Recent Academy',
				thumbUrl: '',
			},
		],
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
		tags: [
			{
				color: 'red',
				id: '4',
				name: 'New',
				thumbUrl: '',
			},
			{
				color: 'lightblue',
				id: '3',
				name: 'Popular',
				thumbUrl: '',
			},
		],
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

export default carouselItems;
