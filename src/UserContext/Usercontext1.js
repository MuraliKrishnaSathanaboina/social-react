import React, { useState } from "react";
import { createContext } from "react";
// import { useState } from "react";

export const Usecontext1 = createContext();

export const UsecontextFun = (props) =>{
    const [Userobj,setUserObj] = useState({name:"",mail:"",pass:""});//
    const [UserArray,setUserArray] = useState([]); 
    const [flag,setFlag] = useState(0)
    const val ={Userobj,setUserObj,UserArray,setUserArray,flag,setFlag}

    return(
        <Usecontext1.Provider value={val}>{props.children}</Usecontext1.Provider>
    )
}



