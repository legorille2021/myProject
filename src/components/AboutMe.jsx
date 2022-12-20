import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import MyExperience from '../components/MyExperience';
const AboutMe = () => {
  return (
    <div className="about ">
        <div className="left">
            <h1>I entroduce myself</h1>
            <p>I'm a Frontend Developer Junior. I've started studying programming languages a year ago and I'm curious to improve my knowledges and start practicing them at work.
            </p>
            <Link to="/contact">
                <button className="contact-btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
              <MyExperience />
            </div>
        </div>
    </div>
  )
}

export default AboutMe;