import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import fire from '../config/fire';



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div className="Navbar">
        <NavLink className="navlink" id="Pocetna" to="/" >Pocetnaa</NavLink>
        <NavLink className="navlink" id="Kanal" to="/kanal" >Kanal</NavLink>
        <NavLink className="navlink" id="Turniri" to="/turniri" >Turniri</NavLink>
        <NavLink className="navlink" id="Uskoro" to="/uskoro" >Uskoro</NavLink>
        <button onClick={this.logout}>Odjavi se</button>
      </div>
    )
  }
}

export default Navbar;
