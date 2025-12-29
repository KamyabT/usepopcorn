const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <li className="d-flex" style={{ listStyle: "none" }}>
      <img className="me-4 mb-3" src={movie.Poster} style={{ width: "65px" }} alt={movie.Title}/>
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
