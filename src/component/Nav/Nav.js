import React from "react";
import Link from "../Link/Link";
import "../Nav/nav.css";

function Nav(props) {
  const Links = [
    { title: "Films", url: "https://swapi.dev/api/films/", id: 1 },
    { title: "People", url: "https://swapi.dev/api/people/", id: 2 },
    { title: "Planets", url: "https://swapi.dev/api/planets/", id: 3 },
  ];

  return (
    <nav>
      {Links.map((link) => (
        <Link link={link} key={link.id} title={link.title} URL={link.url} />
      ))}
    </nav>
  );
}

export default Nav;
