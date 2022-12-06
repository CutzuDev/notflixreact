import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieTile from "../components/MovieTile";

function Results() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { searchTerm } = useParams();

  // USE STATES
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  // USE EFFECTS

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    fetchMovies();
  }, [page]);

  // FETCHING

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
    );
    setMovieData(data.Search);

    console.log(data.Search);
  }

  function pageLogic(number) {
    if (page > 1) {
      setPage(page - number);
    }
  }

  return (
    <div className="page-r__container">
      <div className="result__page--selector" onClick={() => pageLogic(1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </div>
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
      <div className="result__page--selector" onClick={() => setPage(page + 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </div>
  );
}

export default Results;
