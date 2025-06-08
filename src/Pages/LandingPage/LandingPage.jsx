import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const handleButtononClick = () => {
    const navigate=useNavigate();
    navigate('/music');
  }
  return (
    <>
        <div className="landing-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome My World</h1>
                    <p>Discover, listen, and enjoy your favorite music.</p>
                    <button className="btn btn-primary" onClisk={()=>handleButtononClick()}>Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage
