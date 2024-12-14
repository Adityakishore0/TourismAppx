import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; // Make sure to create a corresponding CSS file if needed

const AdminPage = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch subscribed users from localStorage
    const subscribedUsers = JSON.parse(localStorage.getItem('subscribedUsers')) || [];
    setMembers(subscribedUsers);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin! Here you can manage the site content and perform administrative tasks.</p>
      
      {/* Members Section */}
      <div className="members-section">
        <h3>Subscribed Members</h3>
        {members.length === 0 ? (
          <p>No members have subscribed yet.</p>
        ) : (
          <ul>
            {members.map((member, index) => (
              <li key={index}>
                <span>{member.username} - {member.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default AdminPage;
