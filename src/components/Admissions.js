import React from 'react';
import '../styles/Admissions.css';

const admissionsData = [
  { title: 'Admission Form Availability: March 1st', type: 'Download', link: '#', size: '150KB', date: '01/03/2024' },
  { title: 'Last Date for Submission: March 31st', type: 'Details', link: '#', date: '31/03/2024' },
  { title: 'Entrance Test: April 15th', type: 'Download', link: '#', size: '200KB', date: '15/04/2024' },
  { title: 'Announcement of Results: April 30th', type: 'Details', link: '#', date: '30/04/2024' },
  { title: 'Admission Process 2024', type: 'Download', link: '#', size: '100KB', date: '10/01/2024' },
  { title: 'Admission Criteria 2024', type: 'Details', link: '#', date: '15/01/2024' },
];

const Admissions = () => {
  return (
    <div className="admissions-container">
      <h1 className='title'>Admission Detail</h1>
      <div className="search-container">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <button type="button">Search</button>
      </div>
      <table className="admissions-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Download/Details</th>
            <th>Uploaded on</th>
          </tr>
        </thead>
        <tbody>
          {admissionsData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                {item.type === 'Download' ? (
                  <a href={item.link}>Download ({item.size})</a>
                ) : (
                  <a href={item.link}>Details</a>
                )}
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admissions;
