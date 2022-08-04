import React from "react";
import ListItem from "../ListItem/ListItem";
import "../List/list.css";

function List({ data }) {
  return (
    <ul className="list">
      {data.map((result) => (
        <ListItem key={result.title} data={result} />
      ))}
    </ul>
  );
}

export default List;
