import MovieList from "./MovieList";
import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const ListBox = ({ movies, isLoading, error, query }) => {
  const [showMoies, setShowMovies] = useState(true);
  return (
    <div
      className="d-flex flex-column align-items-center p-4 rounded bg-black text-white"
      style={{ width: "400px", minHeight: "calc(100vh - 170px)" }}
    >
      <div
        onClick={() => setShowMovies(!showMoies)}
        className="d-flex align-self-end mb-2"
        style={{ cursor: "pointer" }}
      >
        {showMoies ? "X" : "-"}
      </div>
      {query.length === 0 && (
        <p className="text-white">Type at least 3 characters to search</p>
      )}
      {isLoading && <Loader />}
      {!isLoading && !error && showMoies && <MovieList movies={movies} />}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default ListBox;
