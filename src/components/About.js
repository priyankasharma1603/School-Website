// src/components/About.js
import React from 'react';
import '../styles/About.css';
import teacher1 from '../assets//images/teacher1.jpg';
import teacher2 from '../assets/images/teacher2.jpg';
import teacher3 from '../assets/images/teacher3.jpg';
import teacher4 from '../assets/images/teacher4.jpg';
import about from '../assets/images/about.png';

const About = () => {
  return (
    <div className="about-page container">
      <header className="about-header text-center">
        <h1>About Us</h1>
      </header>

      <section className="about-intro row">
        <div className="col-md-6">
          <img src={about} alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Best School For Your Kids</h2>
          <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
          <button className="btn" id='btn1'>Learn More</button>
        </div>
      </section>

    </div>
  );
}

export default About;
