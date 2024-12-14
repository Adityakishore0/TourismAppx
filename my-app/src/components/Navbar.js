import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/merchandise">Merchandise</Link></li>
        <li><Link to="/collaborations">Collaborations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/guided-tours">Guided Tours</Link></li>
        <li><Link to="/cultural-workshops">Cultural Workshops</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/online-platform">Online Platform</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
