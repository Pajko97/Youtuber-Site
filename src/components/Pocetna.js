import React from 'react';
import ReactPlayer from 'react-player';
import Youtube from 'react-icons/lib/fa/youtube-play';
import Instagram from 'react-icons/lib/fa/instagram';
import './App.css';
import ReactFontFace from 'react-font-face';
import Granger from '../includes/fonts/Granger-Regular.ttf';

const styles = {
  header : {
    fontFamily: 'Granger',
    fontSize: '10rem',
    color: 'red'
  }
}
/* import Youtube from  '../includes/icons/youtube.png';
 */

const Pocetna = () => {
    return (
      <div className="pocetna">
        <h1 style={styles.header}>Ksoma</h1>
        <div className="social-media">
        <a href="https://www.youtube.com/channel/UCd4dAk4EfnzS88SIDBrJzhA"><Youtube height={64} width={64} className="yt-icon"/></a>
         <a href="https://www.instagram.com/ksomaaa"> <Instagram height={64} width={64} className="insta-icon"/></a>

      </div>
        <div className="fullscreen-bg">
{/*           <ReactPlayer className="fullscreen-bg__video" playing="true" muted="true" url="https://www.youtube.com/watch?v=bTSKyGUXy5o"/>
 */}      </div>
      </div>
    );
  };

export default Pocetna;