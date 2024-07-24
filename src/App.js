import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Academics from './Components/Academics';
import Admissions from './Components/Admissions';
import Faculty from './Components/Faculty';
import Students from './Components/Students';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './App.css'; // Import CSS for styling

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }
    const handleLinkClick = () => {
        setMenuOpen(false); // Hide the menu
      };

    return (
        <BrowserRouter>
            <div>
                <nav className="navbar">
                    <div className={`nav-div ${menuOpen ? 'display ' : 'hidden'}`}>
                    <Link to="/" className="nav-item" onClick={handleLinkClick}>Home</Link>
            <Link to="/aboutus" className="nav-item" onClick={handleLinkClick}>About Us</Link>
            <Link to="/academics" className="nav-item" onClick={handleLinkClick}>Academics</Link>
            <Link to="/admissions" className="nav-item" onClick={handleLinkClick}>Admissions</Link>
            <Link to="/faculty" className="nav-item" onClick={handleLinkClick}>Faculty</Link>
            <Link to="/students" className="nav-item" onClick={handleLinkClick}>Students</Link>
            <Link to="/gallery" className="nav-item" onClick={handleLinkClick}>Gallery</Link>
            <Link to="/contactus" className="nav-item" onClick={handleLinkClick}>Contact Us</Link>
                    </div>

                    <span
                        className={`material-symbols-outlined menu-toggle ${menuOpen ? 'hidden' : ''}`}
                        onClick={handleMenuToggle}
                    >
                        menu
                    </span>
                    <span
                        className={`material-symbols-outlined menu-toggle-close ${menuOpen ? 'menu-toggle-close' : 'hidden'}`}
                        onClick={handleMenuToggle}
                    >
                        close
                    </span>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/students" element={<Students />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter >
    );
}

export default App;
