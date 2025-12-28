const Movie = ({ movie }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <img src="" alt="" />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
