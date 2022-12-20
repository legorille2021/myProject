import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BgImage2 from '../components/BgImage2';
import  Form  from '../components/Form';

const Contact = () => {
  return (
    <div>
        <Navbar />
        <BgImage2  heading="CONTACTS" text="Let's have a talk"/>
        <Form />
        <Footer />
  
    </div>
  )
}

export default Contact;
