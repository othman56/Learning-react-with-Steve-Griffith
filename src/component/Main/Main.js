import React from "react";
import "./main.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, useState, useEffect } from "react";
import Home from "../Home/Home";
import Spinner from "../Spinner/Spinner";
import useStarWars from "../../Hooks/useStarWars";

import axios from "axios";

function Main({ keyword }) {
  // we could put state here to hold the list to share with children

  const Films = lazy(() => import("../Films/Films"));
  const Film = lazy(() => import("../Film/Film"));
  const Planets = lazy(() => import("../Planets/Planets"));
  const Planet = lazy(() => import("../Planet/Planet"));
  const People = lazy(() => import("../People/People"));
  const Person = lazy(() => import("../Person/Person"));

  const { pathname } = useLocation();
  const [people, setPeople] = useStarWars(["people"]); //list of people
  const [planets, setPlanets] = useStarWars(["planets"]); // list of planets
  const [films, setFilms] = useStarWars([films]); // list of films

  useEffect(() => {
    (async function () {
      let url = "https://swapi.dev/api/";

      if (pathname.indexOf("/Films") > -1)
        if (films.length === 0) {
          let resp = await fetch(`${url}films?search=${keyword}`);
          let data = await resp.json();
          setFilms(data.results);
        }

      // using Axios to make fetch calls for peple
      if (pathname.indexOf("/People") > -1)
        if (people.length === 0) {
          axios
            .get(`${url}/people?search=${keyword}`)
            .then((resp) => {
              let data = resp.data;
              setPeople(data.results);
            })

            .catch();
        }
      if (pathname.indexOf("/Planets") > -1)
        if (planets.length === 0) {
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
          {/* people is passed prop with fetch results */}
          <Route
            path="/films/*"
            exact
            element={
              <React.Suspense fallback={<Spinner>LOADING FILMS...</Spinner>}>
                <Films list={films} />
              </React.Suspense>
            }
          />

          <Route
            path="films/:id"
            element={
              <React.Suspense
                fallback={<Spinner>LOADING FILM DETAILS...</Spinner>}
              >
                <Film list={films} />
              </React.Suspense>
            }
          />

          <Route
            path="/planets/*"
            exact
            element={
              <React.Suspense fallback={<Spinner>LOADING PLANETS...</Spinner>}>
                <Planets list={planets} />
              </React.Suspense>
            }
          />

          {/* person is passed prop with fetch results  */}
          <Route
            path="/planets/:id"
            element={
              <React.Suspense
                fallback={<Spinner>LOADING PLANET DEATAILS</Spinner>}
              >
                <Planet list={planets} />
              </React.Suspense>
            }
          />

          <Route
            path="/people/*"
            exact
            element={
              <React.Suspense fallback={<Spinner>LOADING PEOPLE</Spinner>}>
                <People list={people} />
              </React.Suspense>
            }
          />

          {/* person is passed prop with fetch results  */}
          <Route
            path="/people/*:id"
            element={
              <React.Suspense
                fallback={<Spinner>LOADING PERSON DEATAILS</Spinner>}
              >
                <Person list={people} />
              </React.Suspense>
            }
          />

          <Route path="/" element={<Home time={new Date() - 5000000} />} />
        </Routes>
      </>
    </div>
  );
}

export default Main;
