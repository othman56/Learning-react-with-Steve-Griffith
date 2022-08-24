import { useParams } from "react-router-dom";
import { useFav } from "../../Context/FavContext";
import "./film.css";

function Film({ list }) {
  let { id } = useParams();
  const film = list.find((item, index) => parseInt(id) === index + 1);
  const [fav, updateFav] = useFav();

  function clicked(e) {
    updateFav("films", parseInt(id), film);
  }
  let details = (
    <>
      <p>{film && film.title}</p>
      <p>{film && film.release_date}</p>
    </>
  );
  return (
    <div className="film-details">
      <h2>Film Details {id}</h2>
      {film && details}
      <p>the current id of the favourite is {fav.id}</p>
      <p>
        <button onClick={clicked}>Set as fav</button>
      </p>
    </div>
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
