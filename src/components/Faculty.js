// src/Faculty.js
import React from 'react';
import '../styles/Faculty.css';

const facultyProfiles = [
  {
    name: 'John Doe',
    title: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration.',
    image: 'https://will-law.org/wp-content/uploads/2024/01/teacher.png'
  },
  {
    name: 'Jane Smith',
    title: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience.',
    image: 'https://as2.ftcdn.net/v2/jpg/04/22/50/63/1000_F_422506363_8fxcY3fEbf9K57dZlKLqxAPk7A9e6ZA5.jpg'
  },
  {
    name: 'Emily Johnson',
    title: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj-cr2nynH_vZQBf_dQz_ULREl26kJvKZVKBljKFeYtwZVRvTgbyvVChGI7hkxQlX_cM&usqp=CAU'
  },
  {
    name: 'Michael Brown',
    title: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience.',
    image: 'https://media.istockphoto.com/id/97105324/photo/a-black-man-teaching-math-at-a-chalkboard.jpg?s=612x612&w=0&k=20&c=_SGKHpE1Sa2fn3fdfUZwNQPWN0PMIxkppd-F17MIRLw='
  },
  {
    name: 'Sophia Davis',
    title: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience.',
    image: 'https://static.toiimg.com/photo/105962971/105962971.jpg'
  },
  {
    name: 'David Wilson',
    title: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience.',
    image: 'https://c8.alamy.com/comp/2RBC8AE/scared-math-teacher-near-chalkboard-in-classroom-2RBC8AE.jpg'
  }
];

const Faculty = () => {
  return (
    <div className="faculty-container">
      <h2>Our Teachers</h2>
      <p>Our Best Faculty !!</p>
      <div className="profiles">
        {facultyProfiles.map((profile, index) => (
          <div className="profile" key={index}>
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <h3>{profile.name}</h3>
            <h4>{profile.title}</h4>
            <h5>{profile.qualification}</h5>
            <p>{profile.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
