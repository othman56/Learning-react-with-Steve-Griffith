import React from "react";
import List from "../List/List";
import "../SearchHistory/searchhistory.css";
import "./searchhistory.css";

function SearchHistory({ terms }) {
  let formattedData = terms.map((result, index) => {
    return {
      ref: index,
      title: result,
      txt: null,
    };
  });
  return (
    <div className="history">
      <List data={formattedData} />
    </div>
  );
}

export default SearchHistory;

//   <ul>
// { terms.map((term) => (
//           <li key={term}>{term}</li>
//         ))}
// </ul>
