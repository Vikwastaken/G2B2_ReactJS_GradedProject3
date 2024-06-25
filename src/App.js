// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetail from './pages/MovieDetail';
import './styles.css';
import data from './data.json';  

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (movie) => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              comingSoon={data['movies-coming']}
              inTheaters={data['movies-in-theaters']}
              topRatedIndian={data['top-rated-india']}
              topRatedMovies={data['top-rated-movies']}
              onFavorite={handleAddFavorite}
            />
          } 
        />
        <Route path="/favorites" element={<Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;














