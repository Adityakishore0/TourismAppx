import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Experiences.css';

const experiences = [
  {
    title: 'Traditional Indian Cooking Class',
    image: '/images/cooking-class.jpg',
    description: 'Learn the art of traditional Indian cooking with a local chef in a hands-on class, and savor the authentic flavors of India through delightful, home-cooked dishes.',
    duration: '3 hours',
    price: '$75',
    bookingLink: '/payment' // Updated to redirect to the Payment page
  },
  {
    title: 'Ancient Yoga Practices',
    image: '/images/yoga-class.jpg',
    description: 'Immerse yourself in ancient yoga practices. Our experienced instructors guide you through traditional poses and breathing exercises.',
    duration: '4 hours',
    price: '$50',
    bookingLink: '/payment' // Updated to redirect to the Payment page
  },
  {
    title: 'Classical Indian Music Session',
    image: '/images/classical-music.jpg',
    description: 'Dive into the soulful rhythms of classical Indian music with live performances and interactive sessions led by skilled musicians.',
    duration: '2.5 hours',
    price: '$55',
    bookingLink: '/payment' // Updated to redirect to the Payment page
  },
  {
    title: 'Kathak Dance Performance and Workshop',
    image: '/images/kathak-dance.jpg',
    description: 'Experience the elegance of Kathak, a classical Indian dance form, with a live performance followed by a hands-on workshop.',
    duration: '3 hours',
    price: '$65',
    bookingLink: '/payment' // Updated to redirect to the Payment page
  },
];

const Experiences = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookNow = (bookingLink) => {
    navigate(bookingLink); // Navigate to the Payment page
  };

  return (
    <div className="experiences-container">
      <h1>Our Unique Experiences</h1>
      <p>Immerse yourself in India's rich culture with our curated experiences.</p>
      <div className="experiences-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <img src={experience.image} alt={experience.title} className="experience-image" />
            <div className="experience-info">
              <h2>{experience.title}</h2>
              <p>{experience.description}</p>
              <p><strong>Duration:</strong> {experience.duration}</p>
              <p><strong>Price:</strong> {experience.price}</p>
              <button onClick={() => handleBookNow(experience.bookingLink)} className="book-now">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
