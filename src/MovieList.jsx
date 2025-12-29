import Movie from "./Movie.jsx";

const MovieList = ({ movies }) => {
  return (
    <div className="">
      {movies ? movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie}></Movie>
      )) : <p className="text-white">No movies found</p>}
    </div>
  );
};

export default MovieList;
