import { NavLink } from "react-router-dom";
import "./people.css";

function People({ list }) {
  console.log("this is the peoples page");
  // state fetch don in main.js amd passed as props.list
  // props.list also passed to person
  // destructure to get list
  return (
    <div className="results">
      <h2>people List</h2>
      {list.length === 0 && <p>No people...</p>}
      {list.map((item, index) => (
        <p key={index.name}>
          <NavLink className="activeLink" to={`/people/${index + 1}`}>
            {item.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
}

export default People;
