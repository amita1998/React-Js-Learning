import React from "react";
import './index.css';
import {NavLink} from 'react-router-dom';

const Error = () => {

    return(
        <div className="App">
        <h1>404 Error Page</h1>
        <p>Sorry,this pae is not available</p>
        <NavLink to="/">Go Back</NavLink>

        </div>

    );
};

export default Error;