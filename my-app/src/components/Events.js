import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css'; // Import the CSS file

const events = [
  {
    name: 'Diwali Festival',
    image: '/images/diwali.jpg',
    date: '2024-11-10',
    time: '6:00 PM',
    location: 'Delhi',
    description: 'Join us for a spectacular Diwali celebration with fireworks, music, and traditional Indian sweets.',
    ticketLink: '/payment'
  },
  {
    name: 'Rath Yatra',
    image: '/images/rath-yatra.jpg',
    date: '2024-07-15',
    time: '10:00 AM',
    location: 'Puri',
    description: 'Experience the grand procession of the Rath Yatra in Puri, a vibrant celebration with chariot rides and devotional music.',
    ticketLink: '/payment'
  },
  {
    name: 'Holi Festival',
    image: '/images/holi.jpg',
    date: '2024-03-25',
    time: '10:00 AM',
    location: 'Varanasi',
    description: 'Experience the vibrant colors of Holi with music, dance, and a riot of colors.', 
    ticketLink: '/payment'
  },
  {
    name: 'Navratri Festival',
    image: '/images/navratri.jpg',
    date: '2024-10-02',
    time: '7:00 PM',
    location: 'Ahmedabad',
    description: 'Celebrate the nine nights of Navratri with traditional Garba and Dandiya dance.', 
    ticketLink: '/payment'
  },
  {
    name: 'Pongal Festival',
    image: '/images/pongal.jpg',
    date: '2024-01-14',
    time: '8:00 AM',
    location: 'Chennai',
    description: 'Join us for a festive Pongal celebration with traditional food, music, and dance.', 
    ticketLink: '/payment'
  },
  {
    name: 'Durga Puja',
    image: '/images/durga-puja.jpg',
    date: '2024-10-10',
    time: '5:00 PM',
    location: 'Kolkata',
    description: 'Witness the grandeur of Durga Puja with elaborate pandals, rituals, and cultural programs.', 
    ticketLink: '/payment'
  },
  {
    name: 'Ganesh Chaturthi',
    image: '/images/ganesh-chaturthi.jpg',
    date: '2024-09-01',
    time: '9:00 AM',
    location: 'Mumbai',
    description: 'Celebrate Ganesh Chaturthi with grand processions, music, and devotional activities.', 
    ticketLink: '/payment'
  },
  {
    name: 'Pushkar Camel Fair',
    image: '/images/pushkar-camel-fair.jpg',
    date: '2024-11-20',
    time: '6:00 AM',
    location: 'Pushkar',
    description: 'Experience the unique Pushkar Camel Fair with livestock trading, cultural performances, and competitions.', 
    ticketLink: '/payment'
  },
  {
    name: 'Onam Festival',
    image: '/images/onam.jpg',
    date: '2024-08-21',
    time: '7:00 AM',
    location: 'Kochi',
    description: 'Join the grand Onam celebrations with flower carpets, traditional games, and the famous Onam Sadhya.', 
    ticketLink: '/payment'
  },
  {
    name: 'Baisakhi Festival',
    image: '/images/baisakhi.jpg',
    date: '2024-04-13',
    time: '9:00 AM',
    location: 'Amritsar',
    description: 'Celebrate Baisakhi with vibrant parades, Bhangra dance, and delicious Punjabi cuisine.', 
    ticketLink: '/payment'
  },
  {
    name: 'Kumbh Mela',
    image: '/images/kumbh-mela.jpg',
    date: '2024-01-10',
    time: '6:00 AM',
    location: 'Prayagraj',
    description: 'Witness the largest spiritual gathering at Kumbh Mela with holy dips, rituals, and spiritual discourses.', 
    ticketLink: '/payment'
  },
  {
    name: 'Christmas in Goa',
    image: '/images/christmas-goa.jpg',
    date: '2024-12-25',
    time: '6:00 PM',
    location: 'Goa',
    description: 'Celebrate Christmas in Goa with beach parties, fireworks, and festive music.', 
    ticketLink: '/payment'
  }
  // Add more events
];

const Events = () => {
  const navigate = useNavigate();

  const handleGetTickets = (link) => {
    navigate(link);
  };

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <p>Discover and participate in our exciting cultural events and festivals.</p>
      
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-info">
              <h2>{event.name}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
              <button onClick={() => handleGetTickets(event.ticketLink)} className="get-tickets-button">Get Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
