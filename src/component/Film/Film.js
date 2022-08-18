import { useParams } from "react-router-dom";

function Film({ list }) {
  let { id } = useParams();

  let film = list.find((item, index) => parseInt(id) === index + 1);

  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );
  return (
    <>
      <h2>Film Details {id}</h2>
      {film && details}
    </>
  );
}

export default Film;

// import { useParams } from "react-router-dom";

// function Person({ list }) {
//   console.log(list);
//   let { id } = useParams();
//   // synchronous search through the list array
//   let person = list.find((person, index) => parseInt(id) === index + 1);

//   return (
//     <div>
//       <h2>Person Details {id}</h2>
//       {person && <p>{person.name}</p>}
//       {person && <p>{person.birth_year}</p>}
//     </div>
//   );
// }

// export default Person;
