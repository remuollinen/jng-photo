import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

function Nav() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/" onClick={menu ? toggleMenu : ""}>
          .jng
        </Link>
      </h1>
      <nav className={menu ? "active-menu" : ""}>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <BiMenuAltRight className="menu-btn" onClick={toggleMenu} />
    </div>
  );
}

export default Nav;
