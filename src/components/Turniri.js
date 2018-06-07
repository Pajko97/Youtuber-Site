import React, {Component} from 'react';
import './App.css';

class Turniri extends Component {
    
    componentDidMount() {
    var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

    var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log("Time" + days + hours + minutes + seconds)
     }) 
    }
  render() {
    return(
        <div className="turniri">
            <h1>Trenutno ni jedan turnir nije u toku!</h1>
            <h2>Sledeci turnir za :</h2>
            <div className="timer">
            <p>{this.days}</p>
            <p>{this.hours}</p>
            <p>{this.minutes}</p>
            <p>{this.seconds}</p>
            </div>
            <a className="prijavi-se">Prijavi se</a>
        </div>
      );
    }
}

export default Turniri;