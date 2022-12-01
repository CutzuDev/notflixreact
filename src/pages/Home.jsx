import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchTerm = "old";

  // USE STATES
  const [origMovieData, setOrigMovieData] = useState([]);
  const [movieIds, setMovieIds] = useState([]);
  const [finalMovieData, setFinalMovieData] = useState(ArrayMovies)
  const ArrayMovies = [];

  // USE EFFECTS

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const listIDs = origMovieData.map((elem) => elem.imdbID);
    setMovieIds(listIDs);
  }, [origMovieData]);

  useEffect(() => {
    movieIds.map((elem) =>
      fetchIndivMovieData(elem).then((elem) => {
        ArrayMovies.push(elem);
      })
    );
  }, [movieIds]);

  // FETCHING

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
    );
    setOrigMovieData(data.Search);
    console.log(data.Search);
  }
  async function fetchIndivMovieData(movieId) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    return data;
  }

  function testFunc() {
    console.log(ArrayMovies);
  }

  return (
    <div>
      <button onClick={testFunc}>Test Indiv</button>
    </div>
  );
}

export default Home;
