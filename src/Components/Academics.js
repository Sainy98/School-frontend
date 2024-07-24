// src/Components/Academics.js
import React from 'react';

const Academics = () => {
  return (
    <div className="academics-container">
      <header className="academics-header">
        <h1>Academics</h1>
        <p>Explore our diverse and comprehensive curriculum designed to nurture young minds.</p>
      </header>

      <section className="curriculum">
        <h2>Curriculum</h2>
        <div className="curriculum-level">
          <h3>Primary (Grades 1-5)</h3>
          <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        </div>
        <div className="curriculum-level">
          <h3>Secondary (Grades 6-10)</h3>
          <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        </div>
        <div className="curriculum-level">
          <h3>Senior Secondary (Grades 11-12)</h3>
          <div className="stream">
            <h4>Science Stream</h4>
            <p>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
          </div>
          <div className="stream">
            <h4>Commerce Stream</h4>
            <p>Accountancy, Business Studies, Economics, Mathematics, English</p>
          </div>
        </div>
      </section>

      <section className="methodologies">
        <h2>Teaching Methodologies</h2>
        <p>"We use a blend of traditional and modern teaching techniques to cater to different learning styles."</p>
      </section>

      <section className="resources">
        <h2>Educational Resources</h2>
        <p>"Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
      </section>
    </div>
  );
};

export default Academics;
