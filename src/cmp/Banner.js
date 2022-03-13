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
			className='bn bn_cvr'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original${mv?.backdrop_path}")`,
				backdropPosition: 'top',
			}}
		>
			<div className='bn_cnt'>
				<h1 className='bn_ttl'>{mv?.name || mv?.original_name}</h1>
				<h1 className='bn_dsc'>{truncate(mv?.overview, 150)}</h1>
				<div className='bn_btns'>
					<button className='bn_btnply'>Play</button>
					<button className='bn_btnmi'>More Info</button>
				</div>
			</div>
			<div className='bn_fb'></div>
		</header>
	);
}
