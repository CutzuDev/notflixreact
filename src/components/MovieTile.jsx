import { useNavigate } from "react-router-dom";
import "./Components.css";

function MovieTile({ Poster, Title, Year, imdbID }) {
  const navigate = useNavigate();

  // onClick={() => navigate(`/${imdbID}`)}

  return (
    <div className="mt__divider" onClick={() => navigate(`/movie/${imdbID}`)}>
      <div className="mt__container">
        <img className="mt__image" src={Poster} />
        <div className="mt__text">
          <div className="mt__text--container">
            <h1 className="mt__title">{Title}</h1>
            <p className="mt__year">{Year}</p>
          </div>
          {/* <h3 className="mt__id">{imdbID}</h3> */}
        </div>
      </div>
    </div>
  );
}

export default MovieTile;
