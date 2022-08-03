import React from "react";
import "../SearchBar/searchbar.css";

function SearchBar() {
  const submitted = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const focus = () => {
    console.log("focused");
  };

  const changed = (e) => {
    console.log("onInput", e.target.value);
  };

  const click = (e) => {
    //     e.preventDefault();
    console.log("click");
  };

  return (
    <div>
      <section className="searchBar">
        <form onSubmit={submitted}>
          <input
            type="text"
            className="searchText"
            name="keyword"
            placeholder="keyword"
            onFocus={focus}
            onInput={(e) => changed(e)}
          />
          <button
            type="submit"
            className="searchBtn"
            name="searchBtn"
            onClick={click}
          >
            search
          </button>
        </form>
      </section>
    </div>
  );
}

export default SearchBar;
