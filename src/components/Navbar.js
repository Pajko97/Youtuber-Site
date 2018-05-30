import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
      <div className="nav-section">
        <NavLink className="link" id="Pocetna" to="/" >Pocetnaa</NavLink>
        <NavLink className="link" id="Kanal" to="/kanal" >Kanal</NavLink>
        <NavLink className="link" id="Turniri" to="/turniri" >Turniri</NavLink>
        <NavLink className="link" id="Uskoro" to="/uskoro" >Uskoro</NavLink>
      </div>
    );
  };

export default Navbar;

