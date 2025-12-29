import MovieList from "./MovieList";
import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const ListBox = ({ movies, isLoading, error, query, setSelectedId }) => {
  const [showMoies, setShowMovies] = useState(true);
  return (
    <div
      className="d-flex flex-column align-items-center p-4 rounded text-white"
      style={{
        width: "480px",
        minHeight: "calc(100vh - 170px)",
        backgroundColor: "#1C1C1E",
      }}
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
      {!isLoading && !error && showMoies && (
        <MovieList movies={movies} setSelectedId={setSelectedId} />
      )}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default ListBox;
