import React, { use, useEffect } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    setUser(null);                   // Clear user state
    navigate('/login');             // Redirect to login page
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/music">Music</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
              </li>
              {user? (
                <>
                <li  className="nav-item">
                  <span className="nav-link">Welcome, <strong>{user.username}</strong></span>
                </li>
                {/* logout */}
                <li className="nav-item">
                  <button className="btn nav-link" onClick={handleLogout}>Logout</button>
                </li>
                </>
              ):
              (
                <>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/signup">Sign Up</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Login</a>
                  </li>
                </>
              )
              }
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
