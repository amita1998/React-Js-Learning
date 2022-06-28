import React from "react";
import "./App.css"; 
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NavbarComponent from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/users/AddUser";

const App = () => {
  return (
    <div className="app">
      <Router>
      <NavbarComponent/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/add" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
