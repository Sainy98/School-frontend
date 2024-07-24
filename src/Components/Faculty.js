// src/Components/Faculty.js
import React from 'react';

const facultyProfiles = [
  { name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: '20 years', imgSrc: 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg' },
  { name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years', imgSrc: 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg' },
  { name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: '10 years', imgSrc: 'https://cdn1.vectorstock.com/i/thumb-large/46/55/person-gray-photo-placeholder-woman-vector-22964655.jpg' },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years', imgSrc: 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg' },
  { name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years', imgSrc: 'https://cdn1.vectorstock.com/i/thumb-large/46/55/person-gray-photo-placeholder-woman-vector-22964655.jpg' },
  { name: 'David Wilson', position: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years', imgSrc: 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg' },
];

const Faculty = () => {
  return (
    <div className="faculty-container">
      <header className="faculty-header">
        <h1>Faculty</h1>
        <p>Meet our dedicated and experienced faculty members.</p>
      </header>
      <div className="faculty-grid">
        {facultyProfiles.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <img src={faculty.imgSrc} alt={`${faculty.name}`} className="faculty-img" />
            <div className="faculty-info">
              <h2>{faculty.name}</h2>
              <p><strong>Position:</strong> {faculty.position}</p>
              <p><strong>Qualification:</strong> {faculty.qualification}</p>
              <p><strong>Experience:</strong> {faculty.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
