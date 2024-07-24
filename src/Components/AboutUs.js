// src/Components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
    <header className="about-us-header">
      <h1>About Us</h1>
      <p>Discover our school's history, mission, and vision.</p>
    </header>

    <section className="about-us-content">
      <div className="section history">
        <h2>History</h2>
        <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      </div>

      <div className="section vision">
        <h2>Vision</h2>
        <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      </div>

      <div className="section mission">
        <h2>Mission</h2>
        <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      </div>

      <div className="section principal-message">
        <h2>Principal's Message</h2>
        <blockquote>
          "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
        </blockquote>
      </div>

      <div className="section facilities">
        <h2>Infrastructure and Facilities</h2>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>
    </section>
  </div>
  );
};

export default AboutUs;
