import SelectedMovie from "./SelectedMovie.jsx";
const WatchedBox = ({ selectedId, setSelectedId }) => {
  return (
    <div
      className="d-flex flex-column align-self-baseline rounded text-white ms-2"
      style={{
        width: "480px",
        minHeight: "calc(100vh - 170px)",
        overflowY: "auto",
        backgroundColor: "#1C1C1E",
      }}
    >
      <div className="d-flex align-self-end mb-2" style={{ cursor: "pointer" }}></div>
      {selectedId && (
        <SelectedMovie
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        ></SelectedMovie>
      )}
    </div>
  );
};

export default WatchedBox;
