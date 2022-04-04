import React from 'react';
import "../styles/media.css";

function media() {
  return (
    <div>
        <div>
            <p className="lofi">Mav Media Videos</p>
        </div>
        <div id="video-container">
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/?listType=playlist&list=PLBV-eXu-9hfA-cRRe_-QV381UMNLLGcD4&autoplay=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MbyPajnyuKQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vPVmtiz6sA4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uudJaZLnKWg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </div>
  )
}

export default media