// src/Components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with us using the information below or fill out the contact form.</p>
      </header>

      <div className="contact-info">
        <div className="contact-details">
          <h2>School's Address</h2>
          <p>Springdale Public School</p>
          <p>123 Education Lane</p>
          <p>City, State, ZIP Code</p>

          <h2>Contact Numbers</h2>
          <p>Phone: +1 234 567 890</p>
          <p>Fax: +1 234 567 891</p>

          <h2>Email</h2>
          <p>Email: contact@springdale.edu</p>
        </div>
        <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

        <div className="google-map">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.217957567331!2d144.9643131153171!3d-37.812499179751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1606712377482!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      
    </div>

  );
};

export default ContactUs;
