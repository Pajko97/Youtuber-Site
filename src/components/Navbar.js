import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';



class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
        <NavLink className="navlink" id="Pocetna" to="/" >Pocetnaa</NavLink>
        <NavLink className="navlink" id="Kanal" to="/kanal" >Kanal</NavLink>
        <NavLink className="navlink" id="Turniri" to="/turniri" >Turniri</NavLink>
        <NavLink className="navlink" id="Uskoro" to="/uskoro" >Uskoro</NavLink>
      </div>
    )
  }
}

export default Navbar;
