// Albums.js

import React, { useContext, useEffect } from "react";
import { Usecontext1 } from "../UserContext/Usercontext1";
import "./Albums.css";

export default function Albums() {
  const { data, setData } = useContext(Usecontext1);
  const url = "https://jsonplaceholder.typicode.com/albums";

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="albums-container">
      {data &&
        data.map((elem) => (
          <div key={elem.id}>
            <p>{elem.userId}</p>
            <p>{elem.title}</p>
          </div>
        ))}
    </div>
  );
}
