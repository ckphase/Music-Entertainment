import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate=useNavigate();
  const handleButtononClick = () => {
    navigate('/music');
  }
  return (
    <>
        <div className="landing-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome The Music World</h1>
                    <p>Discover your favorite artist—learn their name, birthdate, achievements, and inspiring journey. Explore the awards they’ve won and the story behind their most iconic songs, and connect with the music on a deeper level.</p>
                    <button className="btn btn-primary" onClick={handleButtononClick}>Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage
