import MovieList from "./MovieList";
import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const ListBox = ({ movies , isLoading , error}) => {
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
      {isLoading ? <Loader /> : !error && showMoies && <MovieList movies={movies} />}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default ListBox;
