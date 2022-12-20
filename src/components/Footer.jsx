import React from 'react';
import './Footer.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { SiSkype } from 'react-icons/si';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style={{color: "#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Rome(RM)</p>
                </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} 
                    style={{color: "#fff", marginRight:"2rem"}}/>
                    +393298981845
                    </h4>
                </div>
            <div className="email">
                    <h4>
                    <FaMailBulk size={20} 
                    style={{color: "#fff", marginRight:"2rem"}}/>
                    lonzicamilla@gmail.com
                    </h4>
            </div>
            </div>
            
            <div className="right">

                <div className="social">
                <a href="https://github.com/legorille2021"><FaGithub size={25} 
                style={{color: "#fff", marginRight:"2rem"}}/></a>

                <a href="https://join.skype.com/invite/kGwKM1H3CgCC"><SiSkype size={25} 
                style={{color: "#fff", marginRight:"2rem"}}/></a>

                <a href="https://linkedin.com/in/camilla-lonzi-825a9137"><FaLinkedin size={25} 
                style={{color: "#fff", marginRight:"2rem"}}/></a>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Footer;