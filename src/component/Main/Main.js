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

function Main({ keyword }) {
  // we could put state here to hold the list to share with children
  const { pathname } = useLocation();
  const [people, setPeople] = useState([]); //list of people
  const [planets, setPlanets] = useState([]); // list of planets
  const [films, setFilms] = useState([]); // list of films

  useEffect(() => {
    (async function () {
      let url = "https://swapi.dev/api";

      // console.log(pathname.indexOf("/People") > -1, "lets see");
      if (pathname.indexOf("/People") > -1) {
        let resp = await fetch(`${url}/people?search=${keyword}`);
        let data = await resp.json();
        console.log("Fetched the people. Updating people state");
        setPeople(data.results);
      }
      if (pathname.indexOf("/Planets") > -1) {
        let resp = await fetch(`${url}/planets?search=${keyword}`);
        let data = await resp.json();
        console.log("Fetched the planets. Updating planets state");
        setPlanets(data.results);
      }
      if (pathname.indexOf("/Films") > -1) {
        let resp = await fetch(`${url}/films?search=${keyword}`);
        let data = await resp.json();
        console.log("Fetched the films. Updating films state");
        setFilms(data.results);
      }
    })();
  }, [pathname, keyword]);
  function findFilm(id) {
    return 1;
  }
  return (
    <div className="mainContent">
      <>
        <Routes>
          {/* film holds state for fetch results */}
          <Route path="/films" exact element={<Films />}>
            <Route path=":id" element={<Film />} />
          </Route>
          {/* planets holds state for fetch redults */}
          <Route path="/planets" exact element={<Planets />}>
            <Route path=":id" element={<Planet />} />
          </Route>

          {/* people is passed prop with fetch results */}
          <Route path="/people" exact element={<People list={people} />} />
          {/* person is passed prop with fetch results  */}
          <Route path="/people/:id" element={<Person list={people} />} />

          <Route path="/" element={<Home time={new Date() - 5000000} />} />
        </Routes>
      </>
    </div>
  );
}

export default Main;
