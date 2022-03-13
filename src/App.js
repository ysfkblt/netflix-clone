import React from 'react';
import './App.css';
import Banner from './cmp/Banner';
import Footer from './cmp/Footer';
import Navigation from './cmp/Navigation';
import Row from './cmp/Row';
import requests from './requests';

export default function App() {
	return (
		<div className='app'>
			<Navigation />
			<Banner />
			<Row
				className={'ntflxttl'}
				fetchUrl={requests.fetchNetflixOriginals}
				title='NETFLIX ORIGINALS'
				lrgpstr
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row
				title='Romance Movies'
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
			<Footer />
		</div>
	);
}

{
	/* <h1 className='lgclr'>Netflix</h1> */
}
