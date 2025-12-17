const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-4 mx-4 mt-4 rounded bg-danger">
      <div>🍿usepopcorn</div>
      <div>
        <input type="text" placeholder="Search movie..." />
      </div>
      <div>
        <p className="mb-0 text-white">Found 0 top results</p>
      </div>
    </header>
  );
};

export default Header;
