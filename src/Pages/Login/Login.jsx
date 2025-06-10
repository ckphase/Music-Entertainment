import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { s } from 'framer-motion/client';

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('user'));

    if (!storedData) {
      alert('No user data found. Please sign up first.');
      navigate('/signup');
      return;
    }
    if (
      storedData.username === userData.username &&
      storedData.password === userData.password
    ) {
      alert('Login successful!');
      console.log(userData.email,storedData.email);
      console.log(userData.username,storedData.username);
    } else {
      alert('Incorrect username or password.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
