import React from "react";
import "../Link/link.css";

function Link({ title, URL }) {
  return (
    <p>
      <a className="navLink" href={URL}>
        {title}
      </a>
    </p>
  );
}

export default Link;
