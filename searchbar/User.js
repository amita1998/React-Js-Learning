import React from "react";
import { useParams , useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";

// const User = ({match}) =>{
//     return <h1>user{match.params.fname}</h1>;
// };

const User = () => {

    const {fname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    console.log(navigate);

    return(
        <>
    <h1>User {fname} Page</h1>
    <br></br>
    <h4>My Current Location is {location.pathname}</h4>
    {location.pathname === '/user/Mini%20&%20Micky'? (
        <button onClick={() => navigate.push("/about")}>Home Page</button>
    ) : null}
    </>
    );

};

export default User;
