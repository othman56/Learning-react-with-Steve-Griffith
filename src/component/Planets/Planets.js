import { NavLink } from "react-router-dom";
import "./planets.css";

function Planets({ list }) {
  return (
    <>
      <div className="results">
        <h2>Planet List</h2>

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
