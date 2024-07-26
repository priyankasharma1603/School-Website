// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel>
    
      <Carousel.Item>
            <img className="d-block w-100" src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?t=st=1721745833~exp=1721749433~hmac=d54a4c4a7e9d1b90de59b8a0cb01318c93d5bb7f9b6d6127da8db69625ac9183&w=996" alt="Sports Day" />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Science Exhibition" />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Cultural Fest" />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
