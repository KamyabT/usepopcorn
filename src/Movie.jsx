const Movie = ({ movie }) => {
  return (
    <li>
      <img src="" alt="" />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>Calendar</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
