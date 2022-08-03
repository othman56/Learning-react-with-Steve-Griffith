import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

function App() {
  const name = "Company Name";
  return (
    <div className="App">
      <Header name={name} />
      <SearchBar />
    </div>
  );
}

export default App;
