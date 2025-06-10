import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');

    // Redirect to login page
    navigate('/login');  // ✅ Better than window.location.href
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
            <button type='submit' className="btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
