import { NavLink } from "react-router-dom";
import "./people.css";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
import { useFav } from "../../Context/FavContext";

export default function People({ list }) {
  //state fetch done in Main.js and passed as props.list
  //props.list also passed to Person
  //destructure to get list
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (list.length > 0) {
      setTimeout(setLoaded, 800, true);
      // setLoaded(true);
    }
  }, [list]);

  return (
    <div className="results">
      <h2>People List</h2>
      {!loaded && <Spinner>LOADING PEOPLE...</Spinner>}
      {list.length === 0 && <p>No people...</p>}
      {list.map((item, index) => (
        <p key={item.name}>
          <NavLink className="activeLink" to={`/people/${index + 1}`}>
            {item.name}
            {fav.type === "planets" && index + 1 === parseInt(fav.id) && (
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
