// src/places/LehLadakh.js
import React from 'react';
import './LehLadakh.css'; // Import the CSS file for styling

const LehLadakh = () => {
  return (
    <div className="leh-ladakh-container">
      <h1>Leh-Ladakh</h1>
      <p>Leh-Ladakh is known for its stunning landscapes, clear blue skies, and high mountain passes. It is a popular destination for adventure enthusiasts and nature lovers.</p>
      
      <h2>Highlights</h2>
      <ul>
        <li>Pangong Lake</li>
        <li>Thiksey Monastery</li>
        <li>Nubra Valley</li>
        <li>Magnetic Hill</li>
        <li>Khardung La Pass</li>
      </ul>

      <h2>Gallery</h2>
      <div className="gallery">
        <img src="/images/leh-ladakh/pangong-lake.jpg" alt="Pangong Lake" />
        <img src="/images/leh-ladakh/thiksey-monastery.jpg" alt="Thiksey Monastery" />
        <img src="/images/leh-ladakh/nubra-valley.jpg" alt="Nubra Valley" />
        <img src="/images/leh-ladakh/magnetic-hill.jpg" alt="Magnetic Hill" />
        <img src="/images/leh-ladakh/khardung-la-pass.jpg" alt="Khardung La Pass" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default LehLadakh;
