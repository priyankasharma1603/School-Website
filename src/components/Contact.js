import React from 'react';
import '../styles/Contact.css'


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Get in touch!</h2>
        <form>
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter a valid email address" required />
          <textarea placeholder="Enter your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>ADDRESS</h3>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <h3>CALL US</h3>
        <p>+1 (123) 456-7890</p>
        <h3>EMAIL</h3>
        <p>info@springdale.edu</p>
        <h3>OPENING HOURS</h3>
        <p>Monday-Friday .... 10 am - 8 pm</p>
        <p>Saturday, Sunday ........ Closed</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.653789102938!2d-122.41941548468176!3d37.77492967975819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814c2d9b5d9b%3A0x4a4e2d4271e47b68!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1629202306493!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
