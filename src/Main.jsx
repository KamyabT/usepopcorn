import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies , isLoading , error, query }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 rounded ">
      <ListBox movies={movies} isLoading={isLoading} error={error} query={query} />
      <WatchedBox />
    </div>
  );
};

export default Main;
