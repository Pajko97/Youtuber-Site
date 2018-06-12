import React, { Component } from 'react';
import Layout from './Layout';
import Login from './Login';
import fire from '../config/fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user : {}
    }
}

componentDidMount() {
    this.authListener();
}

authListener() {
    fire.auth().onAuthStateChanged((user) => {
        console.log(user);
        if(user) {
            this.setState({ user });
/*                 localStorage.setItem('user', user.uid);
*/            } else {
            this.setState({ user: null });
/*                 localStorage.removeItem('user');
*/            }
    });
}
  render() {
    return (
      <div className="app">
        {this.state.user ? (<Layout/>) : (<Login/>) }

      </div>
    )
  }
}

export default App;
