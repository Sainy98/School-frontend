// src/Components/Admissions.js
import React from 'react';

const Admissions = () => {
  return (
    <div className="admissions-container">
      <header className="admissions-header">
        <h1>Admissions</h1>
        <p>Find out how to join our school community and start your journey towards excellence.</p>
      </header>

      <section className="admission-process">
        <h2>Admission Process and Criteria</h2>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </section>

      <section className="admission-forms">
        <h2>Downloadable Admission Forms</h2>
        <a href="/admission-form.pdf" className="download-button" download>Download Admission Form</a>
      </section>

      <section className="important-dates">
        <h2>Important Dates and Deadlines</h2>
        <ul>
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
