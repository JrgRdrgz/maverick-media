import React from "react";
import Mav from "../assets/Mav.png";
import {Link} from "react-router-dom";
import "../styles/navbar.css";


function navbar() {
  return (
    <div className="nav">
        <div className="nav-container">
            <div className="menu">
                <Link to='/'>Homepage</Link>
                <Link to='/livestream'>Livestream</Link>
                <Link to='/media'>Media</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
        <img className="mavmedialogo"src={Mav}/>
    </div>
  )
}

export default navbar