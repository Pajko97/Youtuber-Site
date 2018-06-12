import React, { Component } from 'react';
import fire from '../config/fire'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state= {
            email: '',
            password: '',
        }

    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {})
        .catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {})
        .then((u) => {console.log(u)})
        .catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
  render() {
    return (
      <div className="login">
        <form className="forma">
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
            placeholder="Enter email"/>

            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" 
            placeholder="Enter password" />

            <input value={this.state.summName} onChange={this.handleChange} type="summname" name="summaname"
            placeholder="Enter Summoner name"/>
            <div className="server">
                <div className="select">
                    <input type="checkbox" id="checkBox-W"/>
                    <label htmlFor="checkBox-W">EUW</label>
                </div>
                <div className="select">
                    <input type="checkbox" id="checkBox-E"/>
                    <label htmlor="checkBox-E">EUNE</label>
                </div>
            </div>
            <div className="submit">
                <button type="submit" onClick={this.login}>Uloguj se</button>
                <button onClick={this.signup} style={{marginLeft: '25px'}}>Registruj se</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Login;
