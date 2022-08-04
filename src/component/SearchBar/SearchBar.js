import React from "react";
import "../SearchBar/searchbar.css";

function SearchBar(props) {
  const submitted = (e) => {
    e.preventDefault();
    console.log("submitted");
    props.addTerm(e.target["keyword"].value);
  };

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          className="searchText"
          name="keyword"
          placeholder="keyword"
          autoComplete="off"
        />
        <button type="submit" className="searchBtn" name="searchBtn">
          search
        </button>
      </form>
      {props.term && <p>you searched for {props.terms}</p>}
    </section>
  );
}

// {props.terms ? <p>you searched for {props.terms}</p> : ""}

export default SearchBar;
