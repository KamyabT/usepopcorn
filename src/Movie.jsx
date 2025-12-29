const Movie = ({ movie, setSelectedId }) => {
  function selectedMovie(movie) {
    setSelectedId(movie.imdbID);
  }

  return (
    <li
      className="d-flex py-2 movie-item"
      style={{ listStyle: "none", borderBottom: "1px solid gray", cursor: "pointer" }}
      onClick={() => selectedMovie(movie)}
    >
      <img
        className="me-4"
        src={movie.Poster}
        style={{ width: "65px" }}
        alt={movie.Title}
      />
      <div className="d-flex flex-column  justify-content-center">
        <h5>{movie.Title}</h5>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
