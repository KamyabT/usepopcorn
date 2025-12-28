import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";

const movies = [
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    poster: "google.com",
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

function App() {
  return (
    <>
      <Navbar />
      <Main movies={movies} />
    </>
  );
}

export default App;
