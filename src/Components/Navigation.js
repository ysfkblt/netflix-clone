import React, { useState, useEffect } from 'react';

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
		<div
			style={{ backgroundColor: show && 'black', opacity: show && '.6' }}
			className='flex fixed w-full content-center xl:justify-between h-[4vw] z-10 transition-all ease-in-out p-6 ml-2 xl:ml-0 xl:p-4'
		>
			<div className='inline-flex self-center pt-4 '>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='h-7  text-white mr-3 xl:hidden'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					stroke-width='2'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
				<img
					className=' ml-[1vw] xl:ml-[3.5%] w-[23vw] xl:w-24 object-contain'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
					alt='Netflix Logo'
				/>

				<nav class='hidden xl:inline-flex self-center  whitespace-nowrap  space-x-5  pl-5 text-sm ml-[1%] text-[#f3f3f3] '>
					<a className='hover:text-[#686868]' href='#'>
						Home
					</a>
					<a className='hover:text-[#686868]' href='#'>
						Series
					</a>
					<a className='hover:text-[#686868]' href='#'>
						Movies
					</a>
					<a className='hover:text-[#686868]' href='#'>
						Originals
					</a>
					<a className='hover:text-[#686868]' href='#'>
						My List
					</a>
				</nav>
			</div>
			<img
				className='hidden xl:inline-flex self-center w-5 xl:w-8 mr-[4vw] object-contain rounded'
				src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
				alt='Avatar'
			/>
		</div>
	);
}
