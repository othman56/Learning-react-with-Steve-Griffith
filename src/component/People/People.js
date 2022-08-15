import { NavLink, Route, Routes } from "react-router-dom";
import Person from "../Person/Person";
import "./people.css";

function People({ list, people }) {
  // state fetch don in main.js amd passed as props.list
  // props.list also passed to person
  // destructure to get list
  return (
    <>
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
      <div className="details">
        <Routes>
          <Route path="/people/:id" element={<Person list={people} />} />
        </Routes>
      </div>
    </>
  );
}

export default People;
