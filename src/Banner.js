import React from 'react';
import { useState, useEffect } from 'react';
import './Banner.css';

import axios from './axios';
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (str, length) => {
    return str?.length > length ? str.substr(0, length - 1) + '...' : str;
  };

  useEffect(() => {
    const getRandomMovie = (length) => {
      return Math.floor(Math.random() * length - 1);
    };

    const fetchData = async () => {
      const results = await axios.get(requests.fetchNetflixOriginals);
      const movies = results.data.results;

      setMovie(movies[getRandomMovie(movies.length)]);
    };

    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner__bottom'></div>
    </header>
  );
};

export default Banner;
