
import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import NotFound from '../NotFound/NotFound';

function App() {

  // State to store the list of sightings
  const [movies, setMovies] = useState([]);

  //State for error handling
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => setError(error.message))
  }, []);
  
  return (
    <main className='App'>
      <h1 className='big-heading'>Rancid Tomatillos</h1>
      <Routes>
        <Route
          path="/"
          element={<Movies movies={movies} />}
        />
        <Route
          path="/movie/:id" 
          element={<MovieCard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      {error && <h2>Something went wrong, please try again later!</h2>}
    </main>
  );
}

export default App;

//test
