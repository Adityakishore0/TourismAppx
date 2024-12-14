import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email or save data)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us through the form below or contact us directly.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Follow Us:</strong></p>
        <p>
          <a href="https://twitter.com/example" className="social-link">Twitter</a> | 
          <a href="https://facebook.com/example" className="social-link">Facebook</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
