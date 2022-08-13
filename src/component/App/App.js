import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import { useState } from "react";
import Main from "../Main/Main";
function App() {
  const name = "Company Name";
  const [terms, setTerms] = useState([]);

  const addTerm = (term) => {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
  };

  return (
    <div className="App">
      <Header name={name} />
      <SearchBar terms={terms[0]} addTerm={addTerm} />
      <main className="content">
        <Main />
      </main>
    </div>
  );
}

export default App;
