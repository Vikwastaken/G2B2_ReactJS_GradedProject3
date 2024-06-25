// src/pages/Favorites.js
import React from 'react';
import MovieCard from '../components/MovieCard';

const Favorites = ({ favorites, onRemoveFavorite }) => (
  <div>
    <h1>Favorite Movies</h1>
    {favorites.length === 0 ? (
      <p>No favorite movies added yet.</p>
    ) : (
      <div className="movie-list">
        {favorites.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} onFavorite={() => {}} />
            <button onClick={() => onRemoveFavorite(movie.id)}>Remove</button>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Favorites;

