import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies , isLoading , error}) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 rounded ">
      <ListBox movies={movies} isLoading={isLoading} error={error} />
      <WatchedBox />
    </div>
  );
};

export default Main;
