import MovieList from "./MovieList";
import { useState } from "react";

const ListBox = ({ movies }) => {
  const [showMoies, setShowMovies] = useState(true);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center p-4 rounded bg-black text-white"
      style={{ width: "400px" }}
    >
      <div
        onClick={() => setShowMovies(!showMoies)}
        className="d-flex align-self-end mb-2"
        style={{ cursor: "pointer" }}
      >
        {showMoies ? "X" : "-"}
      </div>
      {showMoies && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;
