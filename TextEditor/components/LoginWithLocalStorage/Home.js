import React from "react";

const Home = () => {

    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Logout</button>
        </>
    )

}
export default Home;