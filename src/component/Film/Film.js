import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Film({ findFilm }) {
  const [film, setFilm] = useState([]);
  let { id } = useParams();

  console.log(id, " id");

  useEffect(() => {
    setFilm(findFilm(id));
  }, [findFilm, id]);

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
