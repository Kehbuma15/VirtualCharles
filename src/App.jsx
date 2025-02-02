import React from 'react'

import Navbar from './components/NAvbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <Navbar/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        </div>
        <FeatureSection/>
        <Workflow/>
        <Price/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App
