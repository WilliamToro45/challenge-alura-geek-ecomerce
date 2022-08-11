import LogoAluraGeek from "./LogoAluraGeek";
import SearchIcon from "./SearchIcon";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__item item1">
          <LogoAluraGeek />
          <div className="navbar__item--search">
            <input
              className="navbar__item--search-input"
              type="search"
              placeholder="¿Qué desea buscar?"
            />
            <span className="navbar__item--search-logo">
              <SearchIcon />
            </span>
          </div>
        </div>
        <div className="navbar__item item2">
            <Link
              to="login"
              className="navbar__item--link"
              style={{ textDecoration: "none", color: "var(--main-color)" }}
            >
          <button className="navbar__item--button">
              Login
          </button>
          </Link>
        </div>
        <div className="navbar__item hidden item3">
          <SearchIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
