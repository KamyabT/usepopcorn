const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-4 mx-4 mt-4 rounded bg-danger">
      <div className="d-flex align-items-center">
        🍿
        <p className="h3 ms-2">usepopcorn</p>
      </div>
      <div>
        <input className="form-control w-100" type="text" placeholder="Search movie..." />
      </div>
      <div>
        <p className="mb-0 text-white">Found 0 top results</p>
      </div>
    </header>
  );
};

export default Header;
