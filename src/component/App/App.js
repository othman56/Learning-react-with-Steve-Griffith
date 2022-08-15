import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Main from "../Main/Main";
import { useLocation } from "react-router-dom";
function App() {
  const name = "Company Name";
  const pathname = useLocation();
  // const [page, setPage] = useState(pathname);
  const [keyword, setKeyword] = useState("");

  const saveSearch = (term) => {
    setKeyword(term);
  };

  // useEffect(
  //   (pathname) => {
  //     //see if /planets => /films change keyword
  //     // //if /planests => /planets/5 do NOT change keyword
  //     // let newPath = pathname.split("/")[1];
  //     // let oldPath = page.split("/")[1];

  //     // if (newPath != oldPath) {
  //       setPage(pathname);
  //       console.log("Changed the bae path");
  //       setKeyword("");
  //     } else {
  //       console.log("Same base path");
  //     }
  //   },
  //   [pathname]
  // );

  return (
    <div className="App">
      <Header name={name} />
      <SearchBar keyword={keyword} saveSearch={saveSearch} />
      <main className="content">
        <Main keyword={keyword} />
      </main>
    </div>
  );
}

export default App;
