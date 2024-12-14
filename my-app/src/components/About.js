import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="intro">
        <h2>Welcome to Explore India</h2>
        <p>
          Explore India is dedicated to showcasing the rich cultural heritage and diverse destinations of India. Our mission is to connect travelers with authentic experiences that celebrate India’s traditions, history, and vibrant culture.
        </p>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a platform where visitors can immerse themselves in India’s cultural richness. From guided tours and cultural workshops to exclusive content and unique merchandise, we aim to offer an unforgettable experience.
        </p>
      </section>
      <section className="background">
        <h2>Our Story</h2>
        <p>
          The idea for Explore India was born out of a deep passion for India’s heritage and a desire to make its wonders accessible to the world. Over the years, we have collaborated with local artisans, cultural institutions, and businesses to bring you closer to India’s diverse cultural tapestry.
        </p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="Team Member 1" />
          <h3>Abhinav kishore</h3>
          <p>Founder & CEO</p>
          <p>Abhinav is passionate about cultural preservation and has spent years traveling across India to learn and share its rich heritage.</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Team Member 2" />
          <h3>Azad ahmad</h3>
          <p>Head of Tours</p>
          <p>Aditya leads our guided tours and ensures that every journey is both educational and memorable.</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="Team Member 3" />
          <h3>prince kumar</h3>
          <p>Founder & CEO</p>
          <p>Abhinav is passionate about cultural preservation and has spent years traveling across India to learn and share its rich heritage.</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Team Member 4" />
          <h3>Dipsayak saha</h3>
          <p>Head of Tours</p>
          <p>Aditya leads our guided tours and ensures that every journey is both educational and memorable.</p>
        </div>
      </section>
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>If you have any questions or would like to learn more, feel free to contact us:</p>
        <p>Email: <a href="mailto:info@exploreindia.com">info@exploreindia.com</a></p>
        <p>Follow us on social media for updates:</p>
        <p>
          <a href="https://facebook.com/exploreindia" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://instagram.com/exploreindia" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </section>
    </div>
  );
};

export default About;
