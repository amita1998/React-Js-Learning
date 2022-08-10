import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () => {

    return(

        <>

        <div className="menu_style">
            <NavLink activeClassName="active_class" to="/"> About Us </NavLink>
            <NavLink activeClassName="active_class"  to="/service"> Service</NavLink>
            <NavLink activeClassName="active_class"  to="/search"> Search</NavLink>
            <NavLink activeClassName="active_class"  to="/user/Mini & Micky"> User</NavLink>
            <NavLink activeClassName="active_class"  to="/contact"> Contact Us</NavLink>

            </div>
        </>
       

    );
};
export default Menu;
