import { NavLink } from "react-router-dom";
import "./people.css";

function People({ list }) {
  // state fetch don in main.js amd passed as props.list
  // props.list also passed to person
  // destructure to get list
  return (
    <div className="results">
      <h2>people List</h2>
      {list.length === 0 && <p>No people...</p>}
      {list.map((people, index) => (
        <p key={people.name}>
          <NavLink className="activeLink" to={`/people/${index + 1}`}>
            {people.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
}

export default People;
