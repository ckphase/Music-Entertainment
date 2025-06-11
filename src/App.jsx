import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryFilter from './components/CategoryFilter'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Gallery/>} />
    </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
