import React, { useState } from 'react';


const photoData = [
  { src: 'https://stratfordstmaryprimary.co.uk/wp-content/uploads/sports-day-2016-82.jpg', alt: 'Students participating in various sports events', eventType: 'Sports' },
  { src: 'https://th.bing.com/th/id/R.8ed933e6654f30f9c0d040bb5d3b1bb7?rik=oZ8hpR9orOEhEQ&riu=http%3a%2f%2ftheambassadorhighschool.org%2fuploads%2fgallery%2fexhibition-2018-19%2fexhibition17.jpg&ehk=LCb3Z3rw6lufS27gadqmwBPDDVr7uvwJD8AYnml9bTI%3d&risl=&pid=ImgRaw&r=0', alt: 'Students presenting their science projects', eventType: 'Science' },
  { src: 'https://th.bing.com/th/id/OIP.bOYyTEu7iYJZfczpU7_81wHaE8?rs=1&pid=ImgDetMain', alt: 'Students performing in the cultural fest', eventType: 'Culture' },
  { src: 'https://th.bing.com/th/id/R.8ceca225208cc94d19ca1ab84e509a23?rik=iD4KSCMmGjgi1w&riu=http%3a%2f%2fwww.csus.edu%2fnews%2ffiles%2fempty-elementary-classroom.jpg&ehk=9xwWpBgGMnxFxd6zjcXdcoPbomTkQXPoVJi1TWW6et4%3d&risl=&pid=ImgRaw&r=0', alt: 'A glimpse of our interactive classrooms', eventType: 'Infrastructure' },
  { src: 'https://study.com/cimages/multimages/16/adobestock_28100813.jpeg', alt: 'Students reading and studying in the school library', eventType: 'Infrastructure' },
];

const videoData = [
  { src: 'school_tour.mp4', alt: 'Virtual tour of Springdale Public School', eventType: 'Tour' },
  { src: 'annual_function.mp4', alt: 'Highlights from the Annual Function 2023', eventType: 'Event' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All' ? photoData : photoData.filter(photo => photo.eventType === filter);
  const filteredVideos = filter === 'All' ? videoData : videoData.filter(video => video.eventType === filter);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>Photo and video gallery showcasing school events, activities, and infrastructure.</p>
      </header>
      
      <div className="filter-section">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Sports')}>Sports</button>
        <button onClick={() => setFilter('Science')}>Science</button>
        <button onClick={() => setFilter('Culture')}>Culture</button>
        <button onClick={() => setFilter('Infrastructure')}>Infrastructure</button>
        <button onClick={() => setFilter('Tour')}>Tour</button>
        <button onClick={() => setFilter('Event')}>Event</button>
      </div>

      <div className="gallery-content">
        <div className="photos-section">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="photo-card">
              <img src={photo.src} alt={photo.alt} className="gallery-photo" />
              <p>{photo.alt}</p>
            </div>
          ))}
        </div>

        <div className="videos-section">
          {filteredVideos.map((video, index) => (
            <div key={index} className="video-card">
              <video controls className="gallery-video">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
