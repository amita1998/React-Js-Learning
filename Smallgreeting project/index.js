import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


// check customise timing (year,date,day,and hoours)
let Currentdate = new Date(2022, 5, 5, 16);

// let Currentdate = new Date();
Currentdate = Currentdate.getHours();
let greeting = "";
const style = {};

if (Currentdate >= 1 && Currentdate < 12) {
    greeting = "Good Morning";
    style.color = "Red";
} else if (Currentdate >= 12 && Currentdate < 19) {
    greeting = "Good Afternoon";
    style.color = "Orange";
} else {
    greeting = "Good Night";
    style.color = "black"
}

ReactDOM.render( <
    >
    <
    div >
    <
    h1 >
    Hello Dear, < span style = { style } > { greeting } < /span>  < /
    h1 > <
    /div> < / >

    , document.getElementById("root")
);