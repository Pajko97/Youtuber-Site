import React, {Component} from 'react';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';
import './App.css';

class Turniri extends Component {
    
  
  render() {
    return(
        <div className="turniri">
            <h1>Trenutno ni jedan turnir nije u toku</h1>
            <h2>Sledeci turnir za :</h2>
            <div className="timer">
        <CountdownTimer className="tajmer" endDate={moment('09/28/2018 21:00:00')} />
            </div>
            <a className="prijavi-se">Prijavi se</a>
        </div>
      );
    }
}

export default Turniri;