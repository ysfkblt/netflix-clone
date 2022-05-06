import React, { useEffect, useState } from 'react';
import requests from '../requests';
import axios from '../axios';
import './Banner.css';

export default function Banner() {
	const [mv, setmv] = useState([]);

	useEffect(() => {
		async function fdata() {
			const req = await axios.get(requests.fetchNetflixOriginals);

			setmv(
				req.data.results[
					Math.floor(Math.random() * req.data.results.length - 1)
				]
			);

			return req;
		}

		fdata();
	}, []);
	console.log(mv);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<header
			className='hidden xl:block bn_cvr object-contain h-[565px] mb-[1%] '
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original${mv?.backdrop_path}")`,
				backdropPosition: 'top',
			}}
		>
			<div className='pt-[140px] h-[30vh] ml-[2.5%] '>
				<h1 className='text-[5vw] font-bold pb-[.3rem] text-slate-200 leading-none '>
					{mv?.name || mv?.original_name}
				</h1>
				<h1 className='bn_dsc mt-4'>{truncate(mv?.overview, 150)}</h1>
				<div className='bn_btns'>
					<button className='bn_btnply'>Play</button>
					<button className='bn_btnmi'>More Info</button>
				</div>
			</div>
			<div className='bn_fb'></div>
		</header>
	);
}
