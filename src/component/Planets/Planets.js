import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./planets.css";
import Spinner from "../Spinner/Spinner";

function Planets({ list }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(setLoaded, 800, true);
    // setLoaded(true);
  }, [list]);

  return (
    <>
      <div className="results">
        <h2>Planet List</h2>
        {loaded && <Spinner>LOADING PLANETS...</Spinner>}
        {list.length === 0 && <p>No planets...</p>}
        {list.map((planet, index) => (
          <p key={planet.name}>
            <NavLink className="activeLink" to={`/planets/${index + 1}`}>
              {planet.name}
            </NavLink>
          </p>
        ))}
      </div>
    </>
  );
}

export default Planets;
