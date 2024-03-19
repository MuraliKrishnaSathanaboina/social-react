import React, { useContext } from "react";
// import { UserContext } from '../App'
import { Usecontext1 } from "./UserContext/Usercontext1";
//import { srikanth } from '../UserContext/Usercontext1';
import Home from "./Componenta/Home";
import Login from "./Componenta/Login";
import Register from "./Componenta/Register";

import Feeds from "./Componenta/Feeds";
import Posts from "./Componenta/Posts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from "./Componenta/Albums";
import Comments from "./Componenta/Comments";

export default function App() {
  const { flag, setFlag } = useContext(Usecontext1);
  //const {flag,setFlag} = useContext(srikanth)
  //const [flag,setFlag] = useState()
  return (
    <>
    <Router>
      {flag == 0 || flag == 2 ? <Login /> : <Home />}
      
      {flag === 2 && <Register />}

      
        <Routes>
          <Route path="/" index element={<Feeds />}></Route>
          <Route path="/post" element={<Posts />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/comments" element={<Comments/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
