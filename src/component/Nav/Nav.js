import React from "react";
import { NavLink } from "react-router-dom";
import "../Nav/nav.css";

function Nav(props) {
  return (
    <nav className="mainnav">
      <NavLink className="activeLink" to="Films">
        Films
      </NavLink>
      <NavLink className="activeLink" to="People">
        People
      </NavLink>
      <NavLink className="activeLink" to="Planets">
        Planets
      </NavLink>
    </nav>
  );
}

export default Nav;
