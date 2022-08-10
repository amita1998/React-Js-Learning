import React from "react";
import {  Routes,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";
import Search from "./Search";

import './index.css';

const App = () =>{

  const Name = () =>{

    return <h1>Hello , I am name Page</h1>
  }

  return(
    <>
    <Menu/>
      <Routes>
     
        <Route exact path="/"  element={<About/>} />
        <Route exact path="/contact"  element={<Contact/>} />
        <Route exact path="/search"  element={<Search/>} />
        <Route exact path="/service"  element={<Service/>} />
        <Route  path="/contact/Name"  element={<Name/>} />
        <Route  path="/user/:fname"  element={<User/>} />
        <Route element={<Error/>} />

      </Routes>
    </>
  );
};
export default App;
