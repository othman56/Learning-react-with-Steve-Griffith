import React from "react";
import "./main.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home/Home";
import Films from "../Films/Films";
import Person from "../Person/Person";
import People from "../People/People";
import Planets from "../Planets/Planets";

function Main(props) {
  // we could put state here to hold the list to share with children
  const { pathname } = useLocation();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async function () {
      if (pathname.indexOf("/people") > -1) {
        let resp = await fetch("https://swapi.dev/api/people");
        let data = await resp.json();
        console.log("Fetched the people. Updating people state");
        setPeople(data.results);
      }
    })();
  }, [pathname]);
  return (
    <div className="mainContent">
      <>
        <Routes>
          {/* film holds state for fetch results */}
          <Route path="/films" element={<Films />} />
          {/* people is passed prop with fetch results */}
          <Route path="/people" list={People} />
          {/* person is passed prop with fetch results  */}
          <Route path="/people/:id" element={<Person list={people} />} />
          {/* planets holds state for fetch redults */}
          <Route path="/planets/" element={<Planets />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default Main;
