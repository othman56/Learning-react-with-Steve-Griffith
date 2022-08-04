import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const name = "Company Name";
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState("films");

  const addTerm = (term) => {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
  };

  useEffect(() => {
    fetchData(terms[0]);
    return () => {
      // clean up function
    };
  }, [terms]);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${dataType}`;
    if (keyword) {
      url += `/?search=${keyword}`;
    }

    let resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setResults(data.results);
  }
  return (
    <div className="App">
      <Header name={name} />
      <SearchBar terms={terms[0]} addTerm={addTerm} />
      <main className="content">
        <SearchHistory terms={terms} />
        <SearchResults results={results} type={dataType} />
      </main>
    </div>
  );
}

export default App;
