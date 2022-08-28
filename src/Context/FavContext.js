import { createContext, useState, useContext } from "react";
// use the useLocalStorage instead of useState
import useLocalStorage from "../Hooks/useLocalStorage";

const favContext = createContext();
// now we have a context object

function FavProvider(props) {
  // create the provider and its functionality
  const shape = {
    type: "",
    id: 0,
    data: {},
  };
  const [fav, setFav] = useLocalStorage("MyFav", shape);

  function updateFav(type, id, data) {
    setFav({
      type,
      id,
      data,
    });
  }
  return <favContext.Provider value={[fav, updateFav]} {...props} />;
}

function useFav() {
  // for pages that want to get access to the context object's value

  const context = useContext(favContext);
  if (!context) throw new Error("not inside the provider");
  return context;
}

export { useFav, FavProvider };
