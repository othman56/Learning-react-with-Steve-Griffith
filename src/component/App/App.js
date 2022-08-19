import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { createRef, useEffect, useRef, useState } from "react";
import Main from "../Main/Main";
import { useLocation } from "react-router-dom";

function App() {
  const name = "Company Name";
  let { pathname } = useLocation();
  const [page, setPage] = useState(pathname);
  const [keyword, setKeyword] = useState("");

  const saveSearch = (term) => {
    setKeyword(term);
  };

  useEffect(() => {
    // see if /planets => /films change keyword
    //if /planests => /planets/5 do NOT change keyword
    let newPath = pathname.split("/")[1];
    let oldPath = page.split("/")[1];

    if (newPath !== oldPath) {
      setPage(pathname);
      console.log("CHANGED the base path");
      setKeyword("");
    } else {
      console.log("SAME base path");
    }
  }, [pathname]);

  const sbInputRef = createRef();
  // const sbInputRef = useRef();

  return (
    <div className="App">
      <Header name={name} />
      <SearchBar ref={sbInputRef} keyword={keyword} saveSearch={saveSearch} />
      <main className="content">
        <Main keyword={keyword} />
      </main>
    </div>
  );
}

export default App;
