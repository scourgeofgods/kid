import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Facilities from './components/Facilities'
import About from './components/About'
import Classes from './components/Classes'
import Seat from './components/Seat'
import Teachers from './components/Teachers'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Facilities />
      <About />
      <Classes />
      <Seat />
      <Teachers />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
