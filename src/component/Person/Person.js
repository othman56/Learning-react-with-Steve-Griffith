import { useParams } from "react-router-dom";
import "./person.css";

function Person({ list }) {
  let { id } = useParams();
  // synchronous search through the list array
  let person = list.find((item, index) => parseInt(id) === index + 1);

  return (
    <div className="person-details">
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
    </div>
  );
}

export default Person;
