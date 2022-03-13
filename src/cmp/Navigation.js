import React, { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nv ${show ? 'nvbl' : ''}`}>
			<img
				className='nvlg'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
				alt='Netflix Logo'
			/>

			<nav class='mnv'>
				<a href='#'>Home</a>
				<a href='#'>Series</a>
				<a href='#'>Movies</a>
				<a href='#'>Originals</a>
				<a href='#'>My List</a>
			</nav>

			<img
				className='nvtr'
				src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
				alt='Avatar'
			/>
		</div>
	);
}
