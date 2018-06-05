import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import Youtube from  '../includes/icons/instagram.svg';


const Pocetna = () => {
    return (
      <div className="pocetna">
        <h1>Ksoma Gaming</h1>
        <div className="social-media">
        <Youtube/>
        </div>
        <div className="fullscreen-bg">
          <ReactPlayer className="fullscreen-bg__video" playing="true" muted="true" url="https://www.youtube.com/watch?v=bTSKyGUXy5o"/>
      </div>
      </div>
    );
  };

export default Pocetna;