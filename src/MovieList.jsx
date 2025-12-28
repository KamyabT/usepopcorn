import Movie from "./Movie.jsx";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie movie={movie}></Movie>
      ))}
    </>
  );
};

export default MovieList;
