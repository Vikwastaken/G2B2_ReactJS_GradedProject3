// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onFavorite }) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.posterurl} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Link>
    <button onClick={() => onFavorite(movie)}>Favorite</button>
  </div>
);

export default MovieCard;


