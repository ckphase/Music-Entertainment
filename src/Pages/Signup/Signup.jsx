import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <>
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input type="text" id="username" name="username" placeholder="Enter your name" required />
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="btn-container">
          <button type='submit' className="btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup
