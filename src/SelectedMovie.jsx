import { useEffect, useState } from "react";

const SelectedMovie = ({ selectedId, setSelectedId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(
    function () {
      async function getSelectedMovie() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=67c79cad&i=${selectedId}`
        );
        const data = await res.json();
        setMovieData(data);
      }
      getSelectedMovie();
    },
    [selectedId]
  );

  function handleShowSelectedMovie() {
    setSelectedId(null);
  }

  return (
    <div className="">
      <span
        className="p-2 text-black position-absolute"
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "24px",
        }}
        onClick={handleShowSelectedMovie}
      >
        &#8592;
      </span>
      <div className="d-flex">
        <img src={movieData?.Poster} alt={movieData?.Title} style={{ width: "150px" }} />
        <div className="d-flex flex-column justify-content-center ps-4">
          <h3 className="flex-wrap">{movieData?.Title}</h3>
          <p>
            <span>{movieData?.Released}</span>
            <span> . {movieData?.Runtime}</span>
          </p>
          <p>{movieData?.Genre}</p>
          <p>⭐ {movieData?.imdbRating} IMDB rating</p>
        </div>
      </div>
      <div className="d-flex flex-column p-4">
        <p>imdbRating</p>
        <p className="fst-italic">{movieData?.Plot}</p>
        <p>Starring {movieData?.Actors}</p>
        <p>Directed {movieData?.Director}</p>
      </div>
    </div>
  );
};

export default SelectedMovie;
