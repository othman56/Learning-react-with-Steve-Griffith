import { NavLink } from "react-router-dom";
import "./films.css";

function Films({ list }) {
  return (
    <div className="results">
      <h2>Film List</h2>

      {list.length === 0 && <p>No Films...</p>}
      {list.map((film, index) => (
        <p key={film.title}>
          <NavLink className="activeLink" to={`/films/${index + 1}`}>
            {film.title}
          </NavLink>
        </p>
      ))}
    </div>
  );
}

export default Films;
