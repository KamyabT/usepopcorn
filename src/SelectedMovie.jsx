import { useEffect, useState } from "react";

const SelectedMovie = ({ selectedId }) => {
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

  return (
    <div>
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
        <p className="font-italic">{movieData?.Plot}</p>
        <p>{movieData?.Actors}</p>
        <p>{movieData?.Director}</p>
      </div>
    </div>
  );
};

export default SelectedMovie;
