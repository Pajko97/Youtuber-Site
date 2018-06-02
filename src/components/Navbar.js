import { NavLink } from 'react-router-dom';
import React from 'react';
import './App.css';


const Navbar = () => {
    return (
      <div className="Navbar">
        <NavLink className="navlink" id="Pocetna" to="/" >Pocetnaa</NavLink>
        <NavLink className="navlink" id="Kanal" to="/kanal" >Kanal</NavLink>
        <NavLink className="navlink" id="Turniri" to="/turniri" >Turniri</NavLink>
        <NavLink className="navlink" id="Uskoro" to="/uskoro" >Uskoro</NavLink>
      </div>
    );
  };

export default Navbar;

