import React from 'react';
import './App.css';

const Turniri = () => {
    return(
        <div className="turniri">
            <h1>Trenutno ni jedan turnir nije u toku!</h1>
            <h2>Sledeci turnir za :</h2>
            <div className="timer"></div>
            <a className="prijavi-se">Prijavi se</a>
        </div>
    );
}

export default Turniri;