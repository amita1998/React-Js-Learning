import React from "react";
import  ReactDOM  from "react-dom";

function Cards(Props){
console.log(Props)
        return(
                <div className="cards">
        <div className="card">
                <img src={Props.imgsrc} 
                alt="mypic" 
                className="card_img"/>
                <div className="card_info">
                        <span cardName="card_category">{Props.title}</span>
                        <h3 className="card_title">{Props.sname}</h3>
                        <a href={Props.link} target="_blank">
                        <button>Watch Now</button>
                        </a>
                </div>
        </div>
</div>

        );
}
export default Cards;