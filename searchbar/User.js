import React from 'react';
import './index.css';
import { useLocation, useParams } from "react-router-dom";

const USer = () => 
{

    const {name}  =useParams();
    const location=useLocation();

    return (
        <div className="App">
    <h1> Hi i am User {name} page</h1>
    my current location is {location.pathname}
    <br/>
    {location.pathname===`/user/pari`? (<button>Hi</button>): null }
        </div>
      );
    

}
export default User;