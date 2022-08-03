import React from "react";
import "../Header/header.css";
import Nav from "../Nav/Nav";

function Header(props) {
  const name = "Company Name";
  return (
    <div className="masthead">
      <h1>{name}</h1>
      <Nav />
    </div>
  );
}

export default Header;
