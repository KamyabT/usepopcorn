const NumResults = ({ movies }) => {
  const numResults = movies.length;
  return (
    <p className="text-white">
      Found <span className="fw-bold">{numResults}</span> results
    </p>
  );
};

export default NumResults;
