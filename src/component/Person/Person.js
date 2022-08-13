import { useParams } from "react-router-dom";

function Person({ list }) {
  console.log(list);
  let { id } = useParams();
  console.log(id);
  console.page("this page self no dey show at all");
  // synchronous search through the list array
  let person = list.find((item, index) => parseInt(id) === index + 1);

  return (
    <div>
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
    </div>
  );
}

export default Person;
