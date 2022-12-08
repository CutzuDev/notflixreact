import "./Components.css";
import NavLogo from "../assets/notflixlogo.png";
import { ReactComponent as BellIcon } from "../assets/bell-solid.svg";
import { ReactComponent as CarretIcon } from "../assets/caret-right-solid.svg";
import { ReactComponent as UserIcon } from "../assets/user-solid.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__left nav__halfs">
          <img
            draggable={false}
            className="nav__leftImage"
            src={NavLogo}
            onClick={() => navigate("/")}
          />
          <ul className="nav__leftList nav__list">
            <li className="nav__Item">Home</li>
            <li className="nav__Item">TV Shows</li>
            <li className="nav__Item">Movies</li>
            <li className="nav__Item">New & Popular</li>
            <li className="nav__Item">My List</li>
            <li className="nav__Item">Browse by Languages</li>
          </ul>
        </div>
        <div className="nav__right nav__halfs">
          <ul className="nav__rightList nav__list">
            <li className="nav__Item">Kids</li>
            <li className="nav__Item">
              <BellIcon width={20} />
            </li>
            <li className="nav__Item nav_avatar">
              <UserIcon width={12} />
            </li>
            <li className="nav__Item">
              <CarretIcon width={10} />
            </li>
            <button className="back__button pbm" onClick={() => navigate("/")}>
              Go Back
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
