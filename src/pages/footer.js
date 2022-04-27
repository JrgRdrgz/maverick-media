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
            <a target="_blank" href="https://www.facebook.com/MavMediaUTA">
              <img src={facebook} className="icon1" />
            </a>
            <a target="_blank" href= "https://twitter.com/mavmediauta?t=qF9o35yE5nFbLSn9Z0cqJA&s=09">
              <img src={twitter} className="icon2" />
            </a>
            <a target="_blank" href= "https://instagram.com/mavmediauta?igshid=YmMyMTA2M2Y=">
              <img src={instagram} className="icon3" />
            </a>
            <a target="_blank" href= "https://www.tiktok.com/@MavMediaUTA">
              <img src={tiktok} className="icon4" />
            </a>
            <a target="_blank" href= "https://www.youtube.com/channel/UC2i67p4NCf2Hgvq8eE1lJIw" rel="noreferrer">
              <img src={youtube} className="icon5" />
            </a>
        </div>
        
    )
}


export default footer