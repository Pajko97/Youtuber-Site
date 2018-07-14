import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import LogoutIcon from 'react-icons/lib/fa/sign-out';
import fire from '../config/fire';
import ReactFontFace from 'react-font-face';
/* import Granger from '../includes/fonts/Granger-Regular.ttf';
 */
const styles = {
  header : {
    fontFamily: 'Granger',
    fontSize: '3rem',
    color: 'red'
  },
  normal: {
    fontFamily: 'Roboto Thin',
    fontSize: '1.8rem',
    color: 'gainsboro'
  },
  small: {
    fontSize: '1rem',
    fontFamily: 'Roboto Regular',
    color: 'gainsboro'
  }
}



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
      <div className="Navbar" style={styles.normal}>
        <NavLink className="navlink" id="Pocetna" to="/" >Pocetnaa</NavLink>
        <NavLink className="navlink" id="Kanal" to="/kanal" >Kanal</NavLink>
        <NavLink className="navlink" id="Turniri" to="/turniri" >Turniri</NavLink>
        <NavLink className="navlink" id="Uskoro" to="/uskoro" >Uskoro</NavLink>
{/*         <div className="credits">
          <p>Created by Pavle Janjusevic</p>
        </div> */}
        <div className="logout-div" style={styles.small}>
          <LogoutIcon name="logout" width={32} height={32} onClick={this.logout}/>
          <label for="logout">Odjavi se</label>
        </div>
      </div>
    )
  }
}

export default Navbar;
