import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  function handleEvent(e) {
    e.preventDefault();
  }

  function handleInput() {
    navigate(`/results/${searchData}`);
  }

  return (
    <div>
      <form className="search__container" onSubmit={handleEvent}>
        <input
          className="search__input"
          type="text"
          placeholder="Movie Name"
          onChange={(event) => setSearchData(event.target.value)}
        />
        <button
          className="search__button"
          type="submit"
          onClick={() => handleInput()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
