import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Pay.css';

const Pay = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate payment success
      setTimeout(async () => {
        const token = localStorage.getItem('token');
        if (token) {
          await axios.post(
            'http://localhost:5000/subscribe',
            { email, isSubscribed: true },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          // Navigate back to the account page
          navigate('/account');
        }
      }, 1000); // Simulating payment delay
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={paymentDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            value={paymentDetails.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
        <p className="note">Note: Ensure all details are correct before submitting.</p>
      </form>
    </div>
  );
};

export default Pay;
