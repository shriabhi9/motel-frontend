import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

export const Contact = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='h-[300px] w-full hotel flex items-center justify-center text-4xl'><p>Contact Us</p></div>
      <Footer/>    
    </div>
  )
}
