import React from 'react';
import "../styles/livestream.css";

function livestream() {
  return (
    <div className="livestream">
        <div>
        <p className="lofi">Mav Media Stream</p>
        </div>

        <div id="video-container">
            <iframe width="853" height="505" src="https://www.youtube.com/embed/5qap5aO4i9A?&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default livestream