import Movie from "./Movie.jsx";

const MovieList = ({ movies, setSelectedId }) => {
  return (
    <div className="">
      {movies ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} setSelectedId={setSelectedId}></Movie>)
      ) : (
        <p className="text-white">No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
