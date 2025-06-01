import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // set the initial value
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    console.log("storedValue", storedValue);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  //   set new value
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
