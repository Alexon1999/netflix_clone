import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import './Row.css';

import axios from './axios';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

//+ image based url
const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    // async function fetchData() {}
    const fetchData = async () => {
      const result = await axios.get(fetchUrl);
      const data = result.data.results;
      setMovies(data);
    };

    fetchData();
  }, [fetchUrl]);

  const opts = useMemo(
    () => ({
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }),
    []
  );

  //+ const handleClick = (movie) => (e) => {};
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      MovieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          // https://www.youtube.com/watch?v=WivC-4u9duE
          // ? get the video id : v=WivC-4u9duE
          // const urlParams = new URLSearchParams(new URL(url).search).get('v');
          const urlParamsId = new URL(url).searchParams.get('v');

          setTrailerUrl(urlParamsId);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={handleClick(movie)}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* react-youtube */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
