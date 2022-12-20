import './BgImage.css';

import React from 'react';

import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';

const BgImage = () => {
  return (
    <div className="bgImage">
      <div className="mask">
        <img className="intro-image"
        src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Camilla Lonzi</p>
        <h1>Frontend Developer Junior</h1>
        <Link 
        to="/project"
        className="btn">
        Projects
        </Link>

        <Link 
        to="/contact"
        className="btn btn-light">
        Contact
        </Link>
      </div>
    </div>
  )
}

export default BgImage;
