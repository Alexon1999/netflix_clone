import React from 'react';
import './App.css';

import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import NavBar from './NavBar';

// https://api.themoviedb.org/3/movie/550?api_key=61d165f130785bdd48afecc701be6a70

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Banner />

      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        // + isLargeRow = {true} // par defaut ce props sera true , marche avec n'importe quel nom
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documantaries' fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
