import React from 'react';
import "../styles/livestream.css";

function livestream() {
  return (
    <div className="livestream">
        <div>
        <p className="lofi">Mav Media Stream</p>
        </div>

        <div id="video-container">
            <iframe width="853" height="505" src="https://www.youtube.com/embed/maVhfYdKwPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default livestream

//           <iframe width="350px" height="505px" src="https://www.youtube.com/live_chat?v=5qap5aO4i9A&embed_domain=localhost:3000/livestream" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
