import axios from "axios";
import { useEffect, useState } from "react";
import MovieTile from "../components/MovieTile";

function Results() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchTerm = "old";

  // USE STATES
  const [movieData, setMovieData] = useState([]);
  // const [origMovieData, setOrigMovieData] = useState([]);
  // const [movieIds, setMovieIds] = useState([]);
  // const ArrayMovies = [];

  // USE EFFECTS

  useEffect(() => {
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   const listIDs = origMovieData.map((elem) => elem.imdbID);
  //   setMovieIds(listIDs);
  // }, [origMovieData]);

  // useEffect(() => {
  //   movieIds.map((elem) =>
  //     fetchIndivMovieData(elem).then((elem) => {
  //       ArrayMovies.push(elem);
  //     })
  //   );
  // }, [movieIds]);

  // FETCHING

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
    );
    setMovieData(data.Search);
    // setOrigMovieData(data.Search);
    console.log(data.Search);
  }
  // async function fetchIndivMovieData(movieId) {
  //   const { data } = await axios.get(
  //     `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
  //   );
  // return data;
  // }

  function testFunc() {
    console.log("Hello");
  }

  return (
    <div className="page-r__container">
      <div className="results__container">
        {movieData.map((elem, index) => (
          <MovieTile
            key={index}
            Title={elem.Title}
            Poster={elem.Poster}
            Year={elem.Year}
            imdbID={elem.imdbID}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;