import React from 'react';
import "../styles/media.css";

function media() {
  return (
    <div>
        <div>
            <p className="lofi">Mav Media Videos</p>
        </div>
        <div id="video-container">
            <iframe width="853" height="505" src="https://www.youtube.com/embed/?listType=playlist&list=PLBV-eXu-9hfA-cRRe_-QV381UMNLLGcD4&autoplay=1" frameBorder="0" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default media