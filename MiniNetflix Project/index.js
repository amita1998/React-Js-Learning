import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./index.css";
import Sdata from "./Sdata";


function ncard(val)
{
        return(
        <Cards 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />

        );
}
ReactDOM.render(
<>

        <h1 className = "heading_style" >The Top 5 Most Popular TV Shows on Netflix</h1>
        {Sdata.map(ncard)}
        
        
</>,
document.getElementById("root"));