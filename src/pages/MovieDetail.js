// src/pages/MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';  

const MovieDetail = () => {
  const { id } = useParams();
  
  
  const allMovies = [
    ...(Array.isArray(data['movies-coming']) ? data['movies-coming'] : []),
    ...(Array.isArray(data['movies-in-theaters']) ? data['movies-in-theaters'] : []),
    ...(Array.isArray(data['top-rated-india']) ? data['top-rated-india'] : []),
    ...(Array.isArray(data['top-rated-movies']) ? data['top-rated-movies'] : [])
  ];
  
  const movie = allMovies.find(movie => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterurl} alt={movie.title} />
      <p>{movie.storyline}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
      <p><strong>Content Rating:</strong> {movie.contentRating}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p><strong>Average Rating:</strong> {movie.averageRating}</p>
      <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetail;


