import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:5000/login', {
          username: formData.username,
          password: formData.password,
        });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
        navigate('/account');
      } else {
        await axios.post('http://localhost:5000/signup', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        const loginResponse = await axios.post('http://localhost:5000/login', {
          username: formData.username,
          password: formData.password,
        });
        localStorage.setItem('token', loginResponse.data.token);
        setUser(loginResponse.data.user);
        navigate('/account');
      }
    } catch (error) {
      setErrorMessage('error occured, try again.');
      console.error('Form submission error:', error);
    }
  };

  const handleIconClick = () => {
    navigate('/account');
  };

  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {!user ? (
          <div className="form-container">
            {isLogin ? (
              <div className="form">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Log In</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p>
                  Don't have an account?{' '}
                  <button className="switch-form" onClick={handleFormSwitch}>
                    Sign Up
                  </button>
                </p>
              </div>
            ) : (
              <div className="form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Sign Up</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p>
                  Already have an account?{' '}
                  <button className="switch-form" onClick={handleFormSwitch}>
                    Log In
                  </button>
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="user-info-icon" onClick={handleIconClick}>
            <img src="/images/icon.jpg" alt="User Icon" className="circle-icon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
