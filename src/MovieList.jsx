import Movie from "./Movie.jsx";

const MovieList = ({ movies }) => {
  return (
    <div className="">
      {movies.map((movie) => (
        <Movie movie={movie}></Movie>
      ))}
    </div>
  );
};

export default MovieList;
