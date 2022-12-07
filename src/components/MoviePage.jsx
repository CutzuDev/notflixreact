import "./Components.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MoviePage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieData, setmovieData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieData(id);
  }, []);

  async function fetchMovieData(movieId) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    setmovieData(data);
  }
  return (
    <div className="page-mp__container">
      <button className="back__button" onClick={() => navigate("/")}>
        Go Back
      </button>
      <div className="imovie__container">
        <img
          src={movieData.Poster}
          className="imovie__image"
          draggable={false}
        />
        <div className="imovie__text--container">
          <div className="imovie__title--container">
            <div className="imovie__title--divider">
              <h1 className="imovie__title">{movieData.Title}</h1>
              <p className="imovie__plot">{movieData.Plot}</p>
            </div>

            <div className="imovie__title--extras">
              <p className="imovie__genre">{movieData.Genre}</p>
              <p className="imovie__released">{movieData.Released}</p>
              <p className="imovie__rated">{movieData.Rated}</p>
            </div>
          </div>
          <div className="imovie__details--container">
            <div className="imovie__actors">
              <p>Actors:</p>
              <h5>{movieData.Actors}</h5>
            </div>
            <div className="imovie__awards">
              <p>Awards:</p>
              <h5>{movieData.Awards}</h5>
            </div>
            <div className="imovie__language">
              <p>Language:</p>
              <h5>{movieData.Language}</h5>
            </div>
            <div className="imovie__boxoffice">
              <p>BoxOffice:</p>
              <h5>{movieData.BoxOffice}</h5>
            </div>
            <div className="imovie__runtime">
              <p>Runtime:</p>
              <h5>{movieData.Runtime}</h5>
            </div>
            <div className="imovie__rating">
              <p>Rating:</p>
              <h5>{movieData.imdbRating} / 10</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

{
  /*
   <div>{movieData.Title}</div>
      <div>{movieData.Year}</div>
      <div>{movieData.Rated}</div>
      <div>{movieData.Released}</div>
      <div>{movieData.Runtime}</div>
      <div>{movieData.Genre}</div>
      <div>{movieData.Director}</div>
      <div>{movieData.Writer}</div>
      <div>{movieData.Actors}</div>
      <div>{movieData.Plot}</div>
      <div>{movieData.Language}</div>
      <div>{movieData.Country}</div>
      <div>{movieData.Awards}</div>
      <div>{movieData.Poster}</div>
      <div>{movieData.Ratings}</div>
      <div>{movieData.Metascore}</div>
      <div>{movieData.imdbRating}</div>
      <div>{movieData.imdbVotes}</div>
      <div>{movieData.imdbID}</div>
      <div>{movieData.Type}</div>
      <div>{movieData.DVD}</div>
      <div>{movieData.BoxOffice}</div>
      <div>{movieData.Production}</div>
      <div>{movieData.Website}</div> */
}
