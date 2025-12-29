import Logo from "./Logo.jsx";
import NumResults from "./NumResults.jsx";
import Search from "./Search.jsx";
const Navbar = ({ movies }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-4 mx-4 mt-4 rounded bg-danger">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </header>
  );
};

export default Navbar;
