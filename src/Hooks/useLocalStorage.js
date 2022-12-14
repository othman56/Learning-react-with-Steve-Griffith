import React, { useEffect, useState } from "react";

function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}

export default useLocalStorage;
