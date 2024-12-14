import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Account.css';

const Account = () => {
  const [user, setUser] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data);

          axios
            .get('http://localhost:5000/userSubscriptionStatus', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
              setIsSubscribed(res.data.isSubscribed);
            })
            .catch((error) => {
              console.error('Error fetching subscription status:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const handleSubscribe = () => {
    navigate('/pay'); // Redirect to the Pay page for subscription
  };

  const handleDashboard = () => {
    if (isSubscribed) {
      navigate('/dashboard'); // Redirect to the Dashboard page
    } else {
      alert('You need to subscribe first.');
    }
  };

  const handleAdminDashboard = () => {
    navigate('/admin-dashboard'); // Redirect to the Admin Dashboard page
  };

  return (
    <div className="account-page">
      <h2>Account Page</h2>
      {user ? (
        <div>
          <div className="account-section">
            <h3>My Orders</h3>
            {/* Replace this with actual order details */}
            <p>No recent orders.</p>
          </div>
          <div className="account-section">
            <h3>Account Settings</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <button onClick={() => navigate('/manage-addresses')}>Manage Addresses</button>
          </div>
          <div className="membership-section">
            <h3>Become a Member</h3>
            <p>Sell your products and enjoy exclusive benefits. Subscribe now for only $51 per month.</p>
            {isSubscribed ? (
              <button className="dashboard-button" onClick={handleDashboard}>Go to Dashboard</button>
            ) : (
              <button className="subscribe-button" onClick={handleSubscribe}>Subscribe Now</button>
            )}
          </div>
          {user.email === 'abhinavkishore075@gmail.com' && user.isAdmin ? (
            <div className="admin-section">
              <h3>Admin Options</h3>
              <button className="admin-dashboard-button" onClick={handleAdminDashboard}>Admin Dashboard</button>
            </div>
          ) : null}
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Account;
