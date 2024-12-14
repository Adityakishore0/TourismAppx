import React from 'react';
import './OnlinePlatform.css'; // Import the CSS file

const OnlinePlatform = () => {
  return (
    <div className="online-platform-container">
      <h1>Welcome to Our Online Platform</h1>
      <p>Explore exclusive cultural content, book tours and workshops, and interact with other enthusiasts.</p>

      <section className="content-section">
        <h2>Exclusive Cultural Content</h2>
        <div className="content-grid">
          <div className="content-item">
            <h3>Virtual Tours</h3>
            <p>Experience the rich heritage of India from your home with our virtual tours of historical sites.</p>
            <a href="/virtual-tours" className="learn-more">Learn More</a>
          </div>
          <div className="content-item">
            <h3>Educational Videos</h3>
            <p>Watch in-depth videos about Indian culture, festivals, and traditional practices.</p>
            <a href="/educational-videos" className="learn-more">Learn More</a>
          </div>
          <div className="content-item">
            <h3>Articles and Blogs</h3>
            <p>Read articles and blogs about Indian history, traditions, and cultural events.</p>
            <a href="/articles" className="learn-more">Read More</a>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <h2>Book Your Experience</h2>
        <div className="booking-grid">
          <div className="booking-item">
            <h3>Book Tours</h3>
            <p>Reserve your spot on guided tours and explore India’s heritage up close.</p>
            <a href="/book-tours" className="book-now">Book Now</a>
          </div>
          <div className="booking-item">
            <h3>Events</h3>
            <p>Get tickets for upcoming cultural events and festivals.</p>
            <a href="/events" className="book-now">Get Tickets</a>
          </div>
          <div className="booking-item">
            <h3>Workshops</h3>
            <p>Sign up for workshops and learn traditional arts and crafts.</p>
            <a href="/workshops" className="book-now">Sign Up</a>
          </div>
        </div>
      </section>

      <section className="interactive-section">
        <h2>Interact with Us</h2>
        <p>Join our community and participate in discussions, webinars, and more.</p>
        <a href="/forums" className="interactive-link">Visit Forums</a>
        <a href="/webinars" className="interactive-link">Join Webinars</a>
        <a href="/feedback" className="interactive-link">Leave Feedback</a>
      </section>
    </div>
  );
};

export default OnlinePlatform;
