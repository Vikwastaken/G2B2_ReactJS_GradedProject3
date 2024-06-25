// src/pages/Home.js
import React, { useState } from 'react';
import MovieList from '../components/MovieList';

const Home = ({ comingSoon, inTheaters, topRatedIndian, topRatedMovies, onFavorite }) => {
  const [selectedMovies, setSelectedMovies] = useState(comingSoon);

  const handleSelectMovies = (type) => {
    switch (type) {
      case 'comingSoon':
        setSelectedMovies(comingSoon);
        break;
      case 'inTheaters':
        setSelectedMovies(inTheaters);
        break;
      case 'topRatedIndian':
        setSelectedMovies(topRatedIndian);
        break;
      case 'topRatedMovies':
        setSelectedMovies(topRatedMovies);
        break;
      default:
        setSelectedMovies(comingSoon);
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <button onClick={() => handleSelectMovies('comingSoon')}>Coming Soon</button>
        <button onClick={() => handleSelectMovies('inTheaters')}>In Theaters</button>
        <button onClick={() => handleSelectMovies('topRatedIndian')}>Top Rated Indian</button>
        <button onClick={() => handleSelectMovies('topRatedMovies')}>Top Rated Movies</button>
      </div>
      <MovieList movies={selectedMovies} onFavorite={onFavorite} />
    </div>
  );
};

export default Home;



