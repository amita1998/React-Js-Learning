import React from "react";

const Sresult = (props) => {

    const img = `https://images.unsplash.com/300x300/?${props.name}`;
    // const img = `https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/300x300/?${props.name}`;

    return(
        <>
            <div>
                <img src={img} alt="Search"/>
            </div>
        </>

    );
};

export default Sresult;
