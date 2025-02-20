import React, { useEffect, useRef, useState } from 'react'
import Nav from './Component/Nav'
import './App.css'
import Slider from './Component/Slider'
import Lenis from 'lenis'
import Section1 from './Component/Section1'
import Machinary from './Component/Machinary'
import Quality from './Component/Quality'
import Footer from './Component/Footer'

const App = () => {
  const [footerTop , setFooterTop]=useState(null)
  const [aboutTop , setAboutTop]=useState(null)
  useEffect(()=>{
    console.log("=>"+footerTop);
    
  },[footerTop])
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    <div>
      <Nav footerTop={footerTop} aboutTop={aboutTop}/>
      <div className='home-page'>
        <Slider />
        <Section1 />
        <Machinary setAboutTop={setAboutTop}/>
        <Quality/>
        <Footer setFooterTop={setFooterTop}/>
      </div>

    </div>
  )
}

export default App
