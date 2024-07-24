// src/Components/Students.js
import React from 'react';

const activities = [
  { name: 'Music', description: 'Explore your musical talents through various instruments and singing.', img: 'https://www.astroblackrecords.com/wp-content/uploads/2020/01/style-of-Indian-classical-music.jpg' },
  { name: 'Dance', description: 'Express yourself through diverse dance forms and styles.', img: 'https://wallpaperaccess.com/full/2340759.jpg' },
  { name: 'Drama', description: 'Participate in plays and develop your acting skills.', img: 'https://th.bing.com/th/id/OIP.l-O9jqMYm_hXjHpZQYdUMgHaEG?rs=1&pid=ImgDetMain' },
  { name: 'Art', description: 'Unleash your creativity with painting, drawing, and sculpting.', img: 'https://th.bing.com/th/id/OIP.b09rOqgIgfJ9teK8IIbsegHaEs?rs=1&pid=ImgDetMain' },
  { name: 'Sports', description: 'Engage in sports like football, basketball, cricket, and more.', img: 'https://novakdjokovicfoundation.org/wp-content/uploads/2023/02/girls-sports-running-on-a-track-scaled.jpg' },
  { name: 'Robotics', description: 'Build and program robots in our robotics club.', img: 'https://themanufacturer-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/01/14113254/By-adopting-Robotic-Process-Automation-RPA-manufacturers-can-reduce-human-errors-and-increase-productivity-image-courtesy-of-Atos.png' },
  { name: 'Debate Club', description: 'Sharpen your public speaking and argumentation skills.', img: 'https://cloudfront.bernews.com/wp-content/uploads/2017/11/Bermuda-College-Student-Debate-Nov-6-2017-5.jpg' },
  { name: 'Science Club', description: 'Explore scientific concepts and conduct experiments.', img: 'https://c4.wallpaperflare.com/wallpaper/1002/188/929/chemistry-science-laboratories-hd-wallpaper-preview.jpg' },
];

const clubs = [
  { name: 'Literary Society', description: 'Develop your writing and literary analysis skills.', img: 'https://wells.cathedral.school/wp-content/uploads/2018/11/literary-society.jpg' },
  { name: 'Environmental Club', description: 'Participate in environmental conservation activities.', img: 'https://i.pinimg.com/originals/33/76/62/33766290aa88183983f7c3df23047a37.jpg' },
  { name: 'Astronomy Club', description: 'Explore the universe and study celestial bodies.', img: 'https://atlantisresearch.in/wp-content/uploads/2017/03/DSC_0071-e1491562321847.jpg' },
  { name: 'Coding Club', description: 'Learn programming languages and work on coding projects.', img: 'https://wjccschools.org/nes/wp-content/uploads/sites/11/2019/11/IMG_6634-1200x900.jpg' },
];

const achievements = [
  "John Smith - National Level Math Olympiad Winner",
  "Sarah Lee - Gold Medalist in State Swimming Championship",
  "Tech Innovators Club - Winners of Inter-School Robotics Competition",
];

const studentCouncil = {
  president: "Amy Parker, Grade 12",
  vicePresident: "Rajiv Mehta, Grade 11",
  secretary: "Lisa Wong, Grade 10",
};
const Students = () => {
  return (
    <div className="students-container">
      <header className="students-header">
        <h1>Life at Springdale</h1>
        <p>Discover the vibrant student life at Springdale Public School, filled with activities and clubs that nurture diverse talents and interests.</p>
      </header>

      <section className="activities-section">
        <h2>Extracurricular Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <img src={activity.img} alt={activity.name} className="activity-image" />
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="clubs-section">
        <h2>Clubs and Societies</h2>
        <div className="clubs-grid">
          {clubs.map((club, index) => (
            <div key={index} className="club-card">
              <img src={club.img} alt={club.name} className="club-image" />
              <h3>{club.name}</h3>
              <p>{club.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section className="student-council-section">
        <h2>Student Council</h2>
        <div className="student-council">
          <p><strong>President:</strong> {studentCouncil.president}</p>
          <p><strong>Vice President:</strong> {studentCouncil.vicePresident}</p>
          <p><strong>Secretary:</strong> {studentCouncil.secretary}</p>
        </div>
      </section>
    </div>
  );
};

export default Students;
