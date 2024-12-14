import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Address.css'; // Import the CSS file for styling

const Address = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();

    // Save address details in session storage
    const addressDetails = {
      address,
      city,
      state,
      zip,
    };
    sessionStorage.setItem('addressDetails', JSON.stringify(addressDetails));

    navigate('/payment'); // Redirects to the payment page
  };

  return (
    <div className="address-container">
      <h1>Enter Your Address</h1>
      <form onSubmit={handleContinue}>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="12345"
            required
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Address;
