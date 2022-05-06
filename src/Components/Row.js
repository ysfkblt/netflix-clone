import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';
const baseImgUrl = 'https://image.tmdb.org/t/p/original';

export default function Row({ title, fetchUrl, lrgpstr }) {
	const [mvs, setmvs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setmvs(request.data.results);
			/* console.log(request.data.results); */

			return request;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div className='row pt-16 xl:pt-2 text-base font-semibold xl:font-normal xl:text-xl'>
			<h2 style={{ color: lrgpstr && '#e50915' }}>{title}</h2>
			<div className='row__posters'>
				{mvs.map((mv) => (
					<img
						src={`${baseImgUrl}${
							lrgpstr ? mv.poster_path : mv.backdrop_path
						}`}
						alt={mv.name}
						className={`row__poster  ${lrgpstr && 'row__posterlg'}`}
						key={mv.id}
					/>
				))}
			</div>
		</div>
	);
}
