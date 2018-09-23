import React from 'react';
import ReactPlayer from 'react-player';
import Youtube from 'react-icons/lib/fa/youtube-play';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitch from 'react-icons/lib/fa/twitch';
import './App.css';
import ReactFontFace from 'react-font-face';

import banner from './ksomabanner.jpg';



const Pocetna = () => {
    return (
      <div className="pocetna">
      <div className="social-media">
      <a target="_blank" href="https://www.youtube.com/ksoma"><Youtube className="padding" height={56} width={56}/></a>
      <a target="_blank" href="https://www.instagram.com/ksomaaa"><Instagram className="padding" height={56} width={56} /></a>
      <a target="_blank" href="https://www.twitch.tv/morichro"><Twitch className="padding" height={56} width={56}/></a>
      </div>
        

      </div>
    );
  };

export default Pocetna;