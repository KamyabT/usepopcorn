import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { useEffect, useState } from "react";

const movies = [
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    poster: "",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt0088785",
    Title: "Back History",
    Year: "1995",
    poster: "google.com",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt0088563",
    Title: "Back House",
    Year: "2005",
    poster: "google.com",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const key = "67c79cad";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);
          const data = await res.json();
          setMovies(data.Search);
          setIsLoading(false);

          if (!res.ok) throw new Error("Something went wrong");
        } catch (err) {
          console.error("Error fetching movies:", err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3 || query === "") {
        setMovies([]);
        setError(null);
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <Main movies={movies} isLoading={isLoading} error={error} query={query} />
    </>
  );
}

export default App;
