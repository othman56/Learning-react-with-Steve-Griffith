import { NavLink } from "react-router-dom";
import "./films.css";
import { useFav } from "../../Context/FavContext";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

function Films({ list }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(setLoaded, 800, true);
    // setLoaded(true);
  }, [list]);

  const [fav] = useFav();
  return (
    <div className="results">
      <h2>Film List</h2>

      {!loaded && <Spinner>LOADING FILMS...</Spinner>}
      {list.length === 0 && <p>No Films...</p>}
      {list.map((film, index) => (
        <p key={film.title}>
          <NavLink className="activeLink" to={`/films/${index + 1}`}>
            {film.title}{" "}
            {index + 1 === parseInt(fav.id) && (
              <>
                <span className="material-icons">favorite</span> FAVOURITE!
              </>
            )}
          </NavLink>
        </p>
      ))}
    </div>
  );
}

export default Films;
