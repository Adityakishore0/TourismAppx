import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GuidedTours.css'; // Import the CSS file

const tours = [
  {
    name: 'Historic Delhi Tour',
    image: '/images/delhi-tour.jpg',
    description: 'Explore the rich history of Delhi with visits to historic landmarks and cultural sites.',
    duration: '4 hours',
    price: '$80',
    availability: 'Available daily'
  },
  {
    name: 'Jaipur Royal Experience',
    image: '/images/jaipur-tour.jpg',
    description: 'Experience the royal heritage of Jaipur with guided visits to palaces and forts.',
    duration: '6 hours',
    price: '$120',
    availability: 'Weekends only'
  },
  // Add more tours
];

const GuidedTours = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/payment'); // Redirect to the payment page
  };

  return (
    <div className="tours-container">
      <h1>Guided Tours</h1>
      <p>Join our guided tours to experience the best of India’s cultural and historical landmarks with expert local guides.</p>
      
      <div className="tours-list">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.name} className="tour-image" />
            <div className="tour-info">
              <h2>{tour.name}</h2>
              <p>{tour.description}</p>
              <p><strong>Duration:</strong> {tour.duration}</p>
              <p><strong>Price:</strong> {tour.price}</p>
              <p><strong>Availability:</strong> {tour.availability}</p>
              <button onClick={handleBookNow} className="book-now">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidedTours;
