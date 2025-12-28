import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 rounded ">
      <ListBox movies={movies} />
      <WatchedBox />
    </div>
  );
};

export default Main;
