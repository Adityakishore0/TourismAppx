// src/components/Destinations.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';

const destinations = [
  {
    name: 'Jaipur',
    image: '/images/jaipur.jpg',
    description: 'Known as the Pink City, Jaipur is famous for its historic palaces and vibrant bazaars.',
    highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal'],
    link: '/destinations/Jaipur'
  },
  {
    name: 'Varanasi',
    image: '/images/varanasi.jpg',
    description: 'The spiritual capital of India, Varanasi is known for its ghats and vibrant ceremonies along the Ganges River.',
    highlights: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Sarnath'],
    link: '/places/Varanasi'
  },
  {
    name: 'Goa',
    image: '/images/goa.jpg',
    description: 'Famous for its beaches, nightlife, and Portuguese heritage.',
    highlights: ['Baga Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls'],
    link: '/places/Goa'
  },
  {
    name: 'Kerala',
    image: '/images/kerala.jpg',
    description: 'Known for its backwaters, houseboats, and lush greenery.',
    highlights: ['Alleppey Backwaters', 'Munnar', 'Fort Kochi'],
    link: '/places/Kerala'
  },
  {
    name: 'Leh-Ladakh',
    image: '/images/leh-ladakh.jpg',
    description: 'Known for its stunning landscapes and Buddhist monasteries.',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery'],
    link: '/destinations/Leh-Ladakh'
  },
  {
    name: 'Gangtok',
    image: '/images/gangtok.jpg',
    description: 'The capital of Sikkim, known for its scenic beauty and monasteries.',
    highlights: ['Tsomgo Lake', 'Rumtek Monastery', 'Nathula Pass'],
    link: '/places/Gangtok'
  },
  {
    name: 'Shillong',
    image: '/images/shillong.jpg',
    description: 'Known as the Scotland of the East, famous for its hills and waterfalls.',
    highlights: ['Elephant Falls', 'Shillong Peak', 'Umiam Lake'],
    link: '/places/Shillong'
  },
  {
    name: 'Kaziranga National Park',
    image: '/images/kaziranga.jpg',
    description: 'Famous for its population of the one-horned rhinoceros.',
    highlights: ['Jeep Safari', 'Elephant Safari', 'Bird Watching'],
    link: '/places/Kaziranga-National-Park'
  }
];

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h1>Destinations</h1>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-info">
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <h3>Highlights</h3>
              <ul>
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <Link to={destination.link} className="learn-more">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
