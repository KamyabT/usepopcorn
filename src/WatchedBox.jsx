const WatchedBox = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center align-self-baseline p-4 rounded bg-black text-white ms-2"
      style={{ width: "400px", minHeight: "calc(100vh - 170px)", overflowY: "auto" }}
    >
      <div className="d-flex align-self-end mb-2" style={{ cursor: "pointer" }}></div>
    </div>
  );
};

export default WatchedBox;
