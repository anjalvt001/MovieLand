import { useState, useEffect } from "react";
import "./App.css";

import MovieCard from "./MovieCard";

// api key = 7f26ee97

const API_URL = "http://www.omdbapi.com?apikey=7f26ee97";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    searchMovies("title");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-orange.png"
          alt="img"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <h2>There is no more movies..!</h2>
      )}

      <div className="footer">
        <p class="cp-text">
          © Copyright 2023 By Anjal. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
