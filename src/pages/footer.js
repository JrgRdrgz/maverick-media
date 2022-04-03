import React from 'react';
import "../styles/footer.css";
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import youtube from '../assets/youtube.png';

function footer() {
    return (
        <div className="footer">
            <h3 className="socials"></h3>
            <img src={facebook} className="icons"></img>
            <img src={twitter} className="icons"></img>
            <img src={instagram} className="icons"></img>
            <img src={tiktok} className="icons"></img>
            <img src={youtube} className="icons"></img>
        </div>
    )
}

export default footer