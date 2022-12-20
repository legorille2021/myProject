import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BgImage2 from '../components/BgImage2';
import AboutMe from '../components/AboutMe';

const About = () => {
  return (
    <div>
      <Navbar />
      <BgImage2 heading="ABOUT ME" text="I'm a Frontend Developer Junior"/>
      <AboutMe />
      <Footer />
      
    </div>
  )
}

export default About;