import React from 'react';
import './Form.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8j7vtz', 'template_i66kspi', form.current, 'gvON8vFmE913aRrn6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  function mailSent() {
    return ("Email inviata!");
  }
  return (
   
        <form ref={form} onSubmit={sendEmail} >
          <label>Your Name</label>
          <input type="text" name="name" placeholder=" Name" required></input>
          <label>Email</label>
          <input type="email" name="email" placeholder=" Email" required></input>
          <label>Message</label>
          <textarea name="message"  rows="7" placeholder="Type here your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

    
  )
}


export default Form;