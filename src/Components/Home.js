import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel'
import Students from './Students';
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <img src="https://via.placeholder.com/100" alt="School Logo" className="logo" />
        <h1>Springdale Public School</h1>
      </header>
      <p className="introduction">
        Welcome to Springdale Public School, where we nurture young minds for a brighter future.
      </p>   

      <div className="banner">
      <div className="banner-highlight">
        <h2>Annual Sports Day</h2>
        <p>Celebrating Excellence in Sports</p>
      </div>
      <div className="banner-highlight">
        <h2>Science Exhibition</h2>
        <p>Showcasing Student Innovations</p>
      </div>
      <div className="banner-highlight">
        <h2>Cultural Fest</h2>
        <p>Embracing Diversity and Creativity</p>
      </div>
    </div>

      <Carousel >
        <img src='https://media.istockphoto.com/photos/race-to-the-finish-picture-id539280529?k=20&m=539280529&s=612x612&w=0&h=cmQw4TNs_sHWeBXlQIB7X3cVvcpLkZD5FW9lzDlh3pk=' alt='img'></img>
        <img src='https://th.bing.com/th/id/R.8ed933e6654f30f9c0d040bb5d3b1bb7?rik=oZ8hpR9orOEhEQ&riu=http%3a%2f%2ftheambassadorhighschool.org%2fuploads%2fgallery%2fexhibition-2018-19%2fexhibition17.jpg&ehk=LCb3Z3rw6lufS27gadqmwBPDDVr7uvwJD8AYnml9bTI%3d&risl=&pid=ImgRaw&r=0' alt='img'></img>
        <img src='https://blog.higgins.com.au/hs-fs/hubfs/School%20Culture.jpg?width=870&height=489&name=School%20Culture.jpg' alt='img'></img>
        <img src='https://resources.maneuveringthemiddle.com/wp-content/uploads/2016/06/04220434/Positive-Culture-4-1024x535.png' alt='img'></img>
        <img src='https://th.bing.com/th/id/R.f9cf230b7794eba81eb5c2a06e3cf499?rik=jnZVEdgfXz7wQA&riu=http%3a%2f%2findusvalleytimes.com%2fnews%2fwp-content%2fuploads%2f2023%2f11%2fcb7fbd6f-034c-4051-bd48-1254fbfc3dd4.jpg&ehk=ypxA1VGRpkYI0sF3qjQfXCtKmDPJvziU%2f4YAbAD%2bNNw%3d&risl=&pid=ImgRaw&r=0' alt='img'></img>    
      </Carousel>

      <Students/>
    </div>
  );
};

export default Home;
