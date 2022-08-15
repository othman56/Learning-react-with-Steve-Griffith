import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Film from "../Film/Film";
import "./films.css";

function Films(props) {
  //  state inside Planets, shared to Planet via props
  // second approach

  const [List, setList] = useState([
    // { id: 0, title: "Star wars", details: "my star wars" },
    // { id: 0, title: "Avengers", details: "my star Avengers" },
  ]);

  useEffect(() => {
    (function getFilms() {
      let url = "https://swapi.dev/api/films/";
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          setList(data.results);
        })
        .catch(console.warn);
    })();
  }, []);

  function findFilm(id) {
    return List.find((item, index) => parseInt(id) === index + 1);
  }
  return (
    <>
      <div className="results">
        <h2>Film List</h2>

        {List.length === 0 && <p>No films...</p>}
        {List.map((film, index) => (
          <p key={film.title}>
            <NavLink className="activeLink" to={`/films/${index + 1}`}>
              {film.title}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="details">
        <Routes>
          <Route path=":id" element={<Film findFilm={findFilm} />} />
        </Routes>
      </div>
    </>
  );
}

export default Films;
