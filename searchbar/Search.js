import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () =>{

    const [img,setImg] = useState(""); 

    const inputEvent = (event) => {

        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return(
        <>
        <div className="serachbar">
        <input type="text" placeholder="Serach Anything?" value={img} onChange={inputEvent} />
        <Sresult/>
        </div>
        </>
    );


};

export default Search;
