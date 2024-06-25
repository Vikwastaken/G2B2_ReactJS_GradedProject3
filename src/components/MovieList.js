// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onFavorite }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default MovieList;


