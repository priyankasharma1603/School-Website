// src/components/Home.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css';
import c1 from '../assets/images/c1.jpg' 
import c2 from '../assets/images/c2.jpg' 
import c3 from '../assets/images/c3.jpg' // Import custom CSS for styling

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Springdale Public School</h1>
          <p>"Where we nurture young minds for a brighter future."</p>
        </div>
      </header>

      <section className="carousel-section h-90">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={c1}
              alt="Annual Sports Day"
            />
            <Carousel.Caption>
              <h3>Annual Sports Day</h3>
              <p>Celebrating Excellence in Sports</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c2}
              alt="Science Exhibition"
            />
            <Carousel.Caption>
              <h3>Science Exhibition</h3>
              <p>Showcasing Student Innovations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c3}
              alt="Cultural Fest"
            />
            <Carousel.Caption>
              <h3>Cultural Fest</h3>
              <p>Embracing Diversity and Creativity</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      
    </div>
  );
};

export default Home;
