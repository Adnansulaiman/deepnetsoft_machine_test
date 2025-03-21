import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MenuButtons from '../components/MenuButtons'
import MenuList from '../components/MenuList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-black text-white'>
        <Navbar />
        <Hero />
        <MenuButtons />
        <MenuList />
        <Footer />
    </div>
  )
}

export default Home