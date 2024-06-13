import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

export const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="mountain h-[400px] text-4xl flex items-center justify-center md:mt-[-4.2rem] mt-[-9rem] text-[#455d7a]"><p>About Us</p></div>
      <Footer/>
    </div>
  )
}
