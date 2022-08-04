import React from "react";
import {Route , NavLink} from "react-router-dom";
import './index.css';

const Menu = () =>{

    return(
        <>
        <div className="nav">
            <NavLink  className='cnt' exact activeclassName="active_class" to="/">
            About Us
            </NavLink>

            <NavLink className='cnt' exact activeclassName="active_class" to="/services">
            Services
            </NavLink>

            <NavLink className='cnt' exact activeclassName="active_class" to="/search">
            Search
            </NavLink>

            <NavLink className='cnt'  exact activeclassName="active_class" to="/user">
            User
            </NavLink>

            <NavLink className='cnt' exact activeclassName="active_class" to="/contact">
           Contact Us
            </NavLink>
            

</div>
        </>
    );
};

export default Menu;