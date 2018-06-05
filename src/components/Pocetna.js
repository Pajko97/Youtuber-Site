import React from 'react';
import ReactPlayer from 'react-player';
import Youtube from 'react-icons/lib/fa/youtube-play';
import Instagram from 'react-icons/lib/fa/instagram';
import './App.css';
/* import Youtube from  '../includes/icons/youtube.png';
 */

const Pocetna = () => {
    return (
      <div className="pocetna">
        <h1>Ksoma</h1>
        <div className="social-media">
          <Youtube height={64} width={64} className="yt-icon"/>
          <Instagram height={64} width={64} className="insta-icon"/>

        </div>
        <div className="fullscreen-bg">
          <ReactPlayer className="fullscreen-bg__video" playing="true" muted="true" url="https://www.youtube.com/watch?v=bTSKyGUXy5o"/>
      </div>
      </div>
    );
  };

export default Pocetna;