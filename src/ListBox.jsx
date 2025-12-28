import MovieList from "./MovieList";

const ListBox = ({ movies }) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center p-4 rounded bg-black text-white"
      style={{ width: "400px" }}
    >
      <MovieList movies={movies}></MovieList>
    </div>
  );
};

export default ListBox;
