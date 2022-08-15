import { useParams } from "react-router-dom";

function Person({ list }) {
  console.log(list);
  let { id } = useParams();
  // synchronous search through the list array
  let person = list.find((person, index) => parseInt(id) === index + 1);

  return (
    <div>
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
    </div>
  );
}

export default Person;
