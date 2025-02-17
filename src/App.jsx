import React from 'react'
import Nav from './Component/Nav'
import './App.css'
import Slider from './Component/Slider'
import Lenis from 'lenis'
import Section1 from './Component/Section1'
import Machinary from './Component/Machinary'
import Quality from './Component/Quality'
import Footer from './Component/Footer'

const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    <div>
      <Nav />
      <div className='home-page'>
        <Slider />
        <Section1 />
        <Machinary/>
        <Quality/>
        <Footer/>
      </div>

    </div>
  )
}

export default App
