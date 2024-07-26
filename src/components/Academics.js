import React from 'react';
import '../styles/Academics.css';

const Academics = () => {
  return (
    <div className="academics-section">
      <h1 className="title">Curriculum</h1>

      <div className="curriculum">
        <h3 className="section-title">Primary (Grades 1-5):</h3>
        <ul>
          <li>English</li>
          <li>Mathematics</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Art</li>
          <li>Physical Education</li>
        </ul>
      </div>

      <div className="curriculum">
        <h3 className="section-title">Secondary (Grades 6-10):</h3>
        <ul>
          <li>English</li>
          <li>Mathematics</li>
          <li>Science (Physics, Chemistry, Biology)</li>
          <li>Social Studies</li>
          <li>Computer Science</li>
          <li>Physical Education</li>
          <li>Art</li>
        </ul>
      </div>

      <div className="curriculum">
        <h3 className="section-title">Senior Secondary (Grades 11-12):</h3>
        <ul>
          <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
          <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
      </div>

      <div className="teaching-methodologies">
        <h3 className="section-title">Teaching Methodologies:</h3>
        <p>"We use a blend of traditional and modern teaching techniques to cater to different learning styles."</p>
      </div>

      <div className="educational-resources">
        <h3 className="section-title">Educational Resources:</h3>
        <p>"Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
      </div>
    </div>
  );
};

export default Academics;
