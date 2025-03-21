import React from 'react'
import Banner from '../assets/images/banner.jpg'
const Hero = () => {
  return (
    <div className='relative w-full h-96 flex flex-col gap-5 justify-center items-center'>

    <div 
      className="absolute inset-0 bg-cover bg-center opacity-50" 
      style={{ backgroundImage: `url(${Banner})` }}
    ></div>
    
    <h1 className='md:text-6xl text-5xl font-black uppercase z-10'>Menu</h1>
    <p className='md:text-lg text-md md:max-w-2xl max-w-md text-center z-10 text-slate-200'>
      Please take a look at our menu featuring food, drinks and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
    </p>
  </div>
  )
}

export default Hero
