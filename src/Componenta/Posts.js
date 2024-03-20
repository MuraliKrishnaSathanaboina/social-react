// Albums.js

import React, { useContext, useEffect } from "react";
import { Usecontext1 } from "../UserContext/Usercontext1";
import "./Posts.css";
import { Link } from "react-router-dom";

export default function Posts() {
  const { data, setData ,UserName1,SetuserName1,setCount} = useContext(Usecontext1);
  const url = `https://jsonplaceholder.typicode.com/posts/?userId=${UserName1}`;
  const PATH = process.env.REACT_APP_PATH;

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
    <div className="posts-container">
      {data &&
        data.map((elem) => (
          <div key={elem.id}>
            <p>UserId:{elem.userId}</p>
            <p>Title:{elem.title}</p>
            <p>Body:{elem.body}</p>
            <div onClick={() => setCount(elem.id)}>
              <Link to={`${PATH}/comments`}>
                <button>Go to Comments</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
