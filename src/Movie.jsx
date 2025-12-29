const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <li
      className="d-flex mb-2 pb-2"
      style={{ listStyle: "none", borderBottom: "1px solid gray" }}
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
