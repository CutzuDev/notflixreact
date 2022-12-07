import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import "./Pages.css";

function Home() {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  function handleEvent(e) {
    e.preventDefault();
  }

  function handleInput() {
    searchData !== "" && navigate(`/results/${searchData}`);
  }

  return (
    <div className="home__container">
      <h1 className="home__title">
        Notflix is the best movie search website because it is the most
        comprehensive and user-friendly site available. Notflix has an extensive
        database of movies, making it easy to find the right film for you.
      </h1>
      <form className="search__container" onSubmit={handleEvent}>
        <input
          className="search__input"
          type="text"
          placeholder="Movie Name"
          onKeyPress={(event) => {
            event.key === "Enter" && handleInput();
          }}
          onChange={(event) => setSearchData(event.target.value)}
        />
        <SearchIcon
          className="search__button"
          type="submit"
          onClick={() => handleInput()}
        />
      </form>
    </div>
  );
}

export default Home;
