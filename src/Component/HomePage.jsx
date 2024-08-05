import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel';
import Features from './features';
import Contact from './contact';
import Footer from './footer';
import AboutUs from './AboutUs';
import Works from './Works';
// import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <div className='main'>
        <Navbar/>
        <Carousel/>
      </div>
      <AboutUs/>
      <Features/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}