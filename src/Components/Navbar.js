import React from 'react';
import { Link } from 'react-router-dom';
 // This will be for your CSS styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/aboutus" className="nav-item">About Us</Link>
      <Link to="/academics" className="nav-item">Academics</Link>
      <Link to="/admissions" className="nav-item">Admissions</Link>
      <Link to="/faculty" className="nav-item">Faculty</Link>
      <Link to="/students" className="nav-item">Students</Link>
      <Link to="/gallery" className="nav-item">Gallery</Link>
      <Link to="/contactus" className="nav-item">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
