import MovieList from "./MovieList";
import Movie from "./Movie";

const ListBox = ({ movies }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 rounded">
      <MovieList movies={movies}></MovieList>
    </div>
  );
};

export default ListBox;
