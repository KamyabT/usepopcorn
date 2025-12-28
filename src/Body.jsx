const Body = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 rounded ">
      <div
        className="w-25 bg-secondary mx-2 rounded"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <div
          className="d-flex justify-content-end px-2 py-1"
          style={{ cursor: "pointer" }}
        >
          X
        </div>
        <div></div>
      </div>
      <div
        className="w-25 bg-secondary mx-2 rounded"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <div
          className="d-flex justify-content-end px-2 py-1 "
          style={{ cursor: "pointer" }}
        >
          X
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Body;
