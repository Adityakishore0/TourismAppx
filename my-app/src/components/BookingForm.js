import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'; // Import the CSS file

const Workshops = [
  'Traditional Indian Cooking Class',
  'Handmade Pottery',
  // Add more workshops as needed
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    participants: '',
    date: '',
    notes: ''
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email or save to a database)
    console.log('Booking form submitted:', formData);
    // Add form submission logic here (e.g., API call, email sending)
    navigate('/payment'); // Redirect to the payment page
  };

  return (
    <div className="booking-form-container">
      <h1>Book Your Cultural Workshops</h1>
      <form onSubmit={handleSubmit} className="booking-form">
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
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="workshop">Select Workshop</label>
          <select
            id="workshop"
            name="workshop"
            value={formData.workshop}
            onChange={handleChange}
            required
          >
            <option value="">Select a Workshop</option>
            {Workshops.map((workshop, index) => (
              <option key={index} value={workshop}>{workshop}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="participants">Number of Participants</label>
          <input
            type="number"
            id="participants"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
