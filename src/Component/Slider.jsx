import React from 'react'
import P1 from '../assets/Products/P1.jpg';
import P2 from '../assets/Products/P2.jpg';
import P3 from '../assets/Products/P3.jpg';
import P4 from '../assets/Products/P4.jpg';
import P5 from '../assets/Products/P5.jpg';
import '../stylesheet/slider.css'

const Slider = () => {
  return (
    <div className='sliderpage'>
        <h1>NILKANTH INDUSTRIES</h1>
    <div className='slider'>
      <img src={P1}/>
      <img src={P2}/>
      <img src={P3}/>
      <img src={P4}/>
      <img src={P5}/>
      <img src={P1}/>
      <img src={P2}/>
      <img src={P3}/>
      <img src={P4}/>
      <img src={P5}/>
    </div>
    </div>
  )
}

export default Slider
