
const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        className="form-control w-100"
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
