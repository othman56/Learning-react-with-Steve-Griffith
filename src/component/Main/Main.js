import React from "react";
import "./main.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home/Home";
import Films from "../Films/Films";
import Person from "../Person/Person";
import People from "../People/People";
import Planets from "../Planets/Planets";
import Film from "../Film/Film";
import Planet from "../Planet/Planet";
import axios from "axios";

function Main({ keyword }) {
  // we could put state here to hold the list to share with children
  const { pathname } = useLocation();
  const [people, setPeople] = useState([]); //list of people
  const [planets, setPlanets] = useState([]); // list of planets
  const [films, setFilms] = useState([]); // list of films

  useEffect(() => {
    (async function () {
      let url = "https://swapi.dev/api/";

      if (pathname.indexOf("/Films") > -1)
        if (films.length === 0) {
          let resp = await fetch(`${url}films?search=${keyword}`);
          let data = await resp.json();
          setFilms(data.results);
        }
      if (pathname.indexOf("/People") > -1)
        if (people.length === 0) {
          axios
            .get(`${url}people?search=${keyword}`)
            .then((resp) => {
              let data = resp.data;
              setPeople(data.results);
            })
            .catch();
          // let resp = await fetch(`${url}people?search=${keyword}`);
          // let data = await resp.json();
          // setPeople(data.results);
        }
      if (pathname.indexOf("/Planets") > -1)
        if (Planets.length === 0) {
          let resp = await fetch(`${url}planets?search=${keyword}`);
          let data = await resp.json();
          setPlanets(data.results);
        }
    })();
  }, [pathname, keyword, people, planets, films]);

  return (
    <div className="mainContent">
      <>
        <Routes>
          <>
            {/* people is passed prop with fetch results */}
            <Route path="/films/*" exact element={<Films list={films} />} />
            {/* person is passed prop with fetch results  */}
            <Route path="films/:id" element={<Film list={films} />} />

            <Route
              path="/planets/*"
              exact
              element={<Planets list={planets} />}
            />
            {/* person is passed prop with fetch results  */}
            <Route path="/planets/:id" element={<Planet list={planets} />} />

            <Route path="/people/*" exact element={<People list={people} />}>
              {/* person is passed prop with fetch results  */}
              <Route path="/people/*:id" element={<Person list={people} />} />
            </Route>

            <Route path="/" element={<Home time={new Date() - 5000000} />} />
          </>
        </Routes>
      </>
    </div>
  );
}

export default Main;
