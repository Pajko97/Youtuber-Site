import React, { Component } from 'react';
import fire from '../config/fire'
const db = fire.database();

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state= {
            username: '',
            email: '',
            password: '',
            summName: '',
            userId: '',
            server: '',
        }


    }


    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {})
        .catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {})
        .then((u) => {})
        .catch((error) => {
            console.log(error);
        });

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                let uId = user.uid;
                let res = this.menu.value;
                db.ref('users/' + this.state.username).set({
                    summName: this.state.summName,
                    email: this.state.email,
                    server: res
                  });
            }
          });

    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

  render() {
    return (
      <div className="login">
        <form className="forma">
        <h1 className="welcome">Dobrodosli!</h1>
            <input value={this.state.username} onChange={this.handleChange} type="text" name="username"
            placeholder="Unesi korisnicko ime " />

            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
            placeholder="Enter email"/>

            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" 
            placeholder="Enter password" />

            <input onChange={this.handleChange} value={this.state.summName} type="email" name="summName"
            placeholder="Enter Summoner name" />
            <select id = "dropdown" ref = {(input)=> this.menu = input}>
                <option value="N/A">Choose Server</option>
                <option value="EUW">EUW</option>
                <option value="EUNE">EUNE</option>
            </select>
            
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
