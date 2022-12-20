import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BgImage2 from '../components/BgImage2';
import Work from '../components/Work';



const Project = () => {
  return (
    <div>
      <Navbar />
      <BgImage2  heading="PROJECTS" text="Some of my works"/>
      <Work />
      <Footer />
      
      
    </div>
  )
}

export default Project;
