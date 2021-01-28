import React from 'react';
import alireza from '../../../img/alireza.jpg';
import allen from '../../../img/allen_shum.jpg';
import anna from '../../../img/anna_coren.jpg';
import jim from '../../../img/jim_lemay.jpg';
import paul from '../../../img/paul_ferguson.jpg';

const trainers = [
	{
		description: `
				Allen is the Director of Affiliate Training and Consulting, APAC.
				Based in Hong Kong, his experience spans 21 years at CNN.
				Allen's CV includes producing many live news, programs and specials.
				Since 2014, Allen has been sharing CNN journalism standards and best
				practices to our Asia Affiliate partners.
				Allen also had a leading role in the launch of CNN Indonesia in 2015
				and CNN Philippines in 2016.`,
		image: <img key="allen" src={allen} />,
		name: 'Allen Shum',
	},
	{
		description: `
				Alireza is the former Executive Producer of Connect the World with Becky Anderson,
				CNN International’s flagship current affairs program broadcast out of Abu Dhabi.
				Alireza’s experience includes producing high-profile interviews,
				live breaking news programming and long-form content.
				Currently based in Dublin, Alireza is a consulting producer for
				Connect the World with Becky Anderson and teaches The Newsroom
				graduate module at University College Dublin’s Clinton Institute.`,
		image: <img key="alireza" src={alireza} />,
		name: 'Alireza Hajihosseini',
	},
	{
		description: `
	Anna is an award-winning international correspondent based in Hong Kong.
	Anna has been a journalist for more than 15 years reporting on some of the world's biggest
	news events. Anna has also interviewed some of the world's top newsmakers,
	including former U.S. President Bill Clinton, U.N. Secretary-General Ban Ki-moon,
	former Australian Prime Ministers Julia Gillard and John Howard and actors and 
	activists George Clooney and Sigourney Weaver.`,
		image: <img key="ana" src={anna} />,
		name: 'Anna Coren',
	},
	{
		description: `
Jim is Senior Consultant at Frank N. Magid and Associates and a former Deputy Managing Editor at CNN.
Jim advises and consults broadcast executives, journalist and entrepreneurs around the world.
At CNN, Jim was instrumental in building and maintaining the network’s multifaceted,
multiplatform approach to news coverage.`,
		image: <img key="jim" src={jim} />,
		name: 'Jim LeMay',
	},
	{
		description: `
	Today’s journalist juggles more tools than ever before –
	Paul can train on all manner of options of how to report, shoot,
	capture audio and transmit recorded or live reports.
	He can teach the principles of news video camera work with mobile phones and prosumer devices.
	A former field reporter, Paul brings three decades of journalism experience
	to the question “what makes a great story?”
	He can instruct on the CNN approach to balancing editorial context with accuracy
	on the latest story developments.`,
		image: <img key="paul" src={paul} />,
		name: 'Paul Ferguson',
	},
];

export default trainers;
