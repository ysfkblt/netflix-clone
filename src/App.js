import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Row from './Components/Row';
import requests from './requests';

export default function App() {
	return (
		<div className='app select-none'>
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
