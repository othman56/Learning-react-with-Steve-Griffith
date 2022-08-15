import React, { createRef, useEffect } from "react";
import "../SearchBar/searchbar.css";

function SearchBar({ keyword, saveSearch }) {
  let inputRef = createRef(); //container for a DOM element

  const submitted = (e) => {
    e.preventDefault();
    console.log("submitted");
    saveSearch(inputRef.current.value);
  };
  useEffect(() => {
    //initial load plus if keyword in App changes
    inputRef.current.value = keyword;
  }, [keyword, inputRef]);

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          ref={inputRef}
          className="searchText"
          name="keyword"
          placeholder="keyword"
          autoComplete="off"
        />
        <button type="submit" className="searchBtn" name="searchBtn">
          search
        </button>
      </form>
      {/* {props.term && <p>you searched for {props.terms}</p>} */}
    </section>
  );
}

// {props.terms ? <p>you searched for {props.terms}</p> : ""}

export default SearchBar;
