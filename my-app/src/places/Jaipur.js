// src/places/Jaipur.js
import React from 'react';
import './Jaipur.css'; // Ensure you have a CSS file for styling

const Jaipur = () => {
  return (
    <div className="jaipur-container">
      <h1>Jaipur</h1>
      <p>Jaipur, the capital of Rajasthan, is known as the Pink City for its distinctive color scheme. It's famous for its rich history, vibrant culture, and stunning architecture.</p>
      
      <h2>Highlights</h2>
      <ul>
        <li>Amber Fort</li>
        <li>City Palace</li>
        <li>Hawa Mahal</li>
        <li>Jantar Mantar</li>
        <li>Jaipur Markets</li>
      </ul>

      <h2>Gallery</h2>
      <div className="gallery">
        <img src="/images/jaipur/amber-fort.jpg" alt="Amber Fort" />
        <img src="/images/jaipur/city-palace.jpg" alt="City Palace" />
        <img src="/images/jaipur/hawa-mahal.jpg" alt="Hawa Mahal" />
        <img src="/images/jaipur/jantar-mantar.jpg" alt="Jantar Mantar" />
        <img src="/images/jaipur/markets.jpg" alt="Jaipur Markets" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Jaipur;
