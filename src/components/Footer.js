import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section follow-us">
        <h3>Follow Us</h3>
        <div className="footer-line"></div>
        <div className="social-icons">
          <a href="#" className="icon"><img src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png" alt="Facebook" /></a>
          <a href="#" className="icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LEV-ApZUO6OUnu1ulvL8F3L91AqHlpD0Hw&s" alt="Twitter" /></a>
          <a href="#" className="icon"><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721865600&semt=ais_user" alt="Instagram" /></a>
          <a href="#" className="icon"><img src="https://icon2.cleanpng.com/20180319/txw/kisspng-triangle-text-brand-communication-gmail-5ab07b2b7d3ba8.174451421521515307513.jpg" alt="Email" /></a>
        </div>
      </div>
      <div className="footer-section navigation">
        <h3>Navigation</h3>
        <div className="footer-line"></div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Parents</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section latest-news">
        <h3>Latest News</h3>
        <div className="footer-line"></div>
        <ul>
          <li><a href="#">Photo Day! <span>22/10/2016</span></a></li>
          <li><a href="#">Healthy Food <span>15/01/2016</span></a></li>
          <li><a href="#">Exam Timetable <span>15/01/2016</span></a></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contact</h3>
        <div className="footer-line"></div>
        <p>Phone:</p>
        <p>Email:</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All Rights Reserved. Powered by <a href="#">My School Design</a></p>
      </div>
    </footer>
  );
};

export default Footer;
