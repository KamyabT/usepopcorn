import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies, isLoading, error, query, setSelectedId, selectedId }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 rounded ">
      <ListBox
        movies={movies}
        isLoading={isLoading}
        error={error}
        query={query}
        setSelectedId={setSelectedId}
      />
      <WatchedBox selectedId={selectedId} setSelectedId={setSelectedId} />
    </div>
  );
};

export default Main;
