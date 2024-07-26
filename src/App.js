// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home/>
        <About/>
        <Academics/>
        <Admissions/>
        <Faculty/>
        <Students/>
        <Gallery/>
        <Contact/>
        <Footer/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
