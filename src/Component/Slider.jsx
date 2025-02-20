import React from 'react'
import P1 from '../assets/Products/P1.jpg';
import P2 from '../assets/Products/P2.jpg';
import P3 from '../assets/Products/P3.jpg';
import P4 from '../assets/Products/P4.jpg';
import P5 from '../assets/Products/P5.jpg';
import S1 from '../assets/Products/S1(1).jpg';
import S2 from '../assets/Products/S2.jpg';
import S11 from '../assets/Products/S11.jpg';
import S20 from '../assets/Products/S20.jpg';
import S13 from '../assets/Products/S13.jpg';


import '../stylesheet/slider.css'

const Slider = () => {
  return (
    <div className='sliderpage'>
        <h1>NILKANTH INDUSTRIES</h1>
    <div className='slider'>
      <img src={S11}/>
      <img src={S1}/>
      <img src={S20}/>
      <img src={S2}/>
      <img src={P5}/>
      <img src={S11}/>
      <img src={S1}/>
      <img src={S20}/>
      <img src={S2}/>
      <img src={P5}/>
    </div>
    </div>
  )
}

export default Slider
