import { useEffect, useState } from "react";

const SelectedMovie = ({ selectedId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(
    function () {
      console.log(selectedId, typeof selectedId);
      fetch(`http://www.omdbapi.com/?apikey=67c79cad&i=${selectedId}`)
        .then((res) => res.json())
        .then((data) => setMovieData(data));
    },

    [selectedId]
  );

  return <div>
    <div>
        <img src="" alt="" />
        <div></div>
    </div>
    <div>stars & desc</div>
  </div>;
};

export default SelectedMovie;
