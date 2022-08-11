import React from "react";
import LogoAluraGeek from "./LogoAluraGeek";
import SearchIcon from "./SearchIcon";
import { Link, useLocation } from "react-router-dom";

/**
 * 
 * @returns - the common header of the pages.
 */

function Header() {
  const currentPathName = useLocation().pathname;
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [buttonTextContent, setButtonTextContent] = React.useState("Login");

  React.useEffect(() => {
    if(currentPathName.includes("login") || currentPathName.includes("products")) return setIsButtonVisible(false);

    if(currentPathName.includes("admin")) {
      setIsButtonVisible(true);
      setButtonTextContent("Menú Administrador")
    };
    
    setIsButtonVisible(true);

  }, [currentPathName]);

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
        {isButtonVisible && (
          <div className="navbar__item item2">
            <Link
              to="login"
              className="navbar__item--link"
              style={{ textDecoration: "none", color: "var(--main-color)" }}
            >
              <button className="navbar__item--button">
                {buttonTextContent}
              </button>
            </Link>
          </div>
        )}
        <div className="navbar__item hidden item3">
          <SearchIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
