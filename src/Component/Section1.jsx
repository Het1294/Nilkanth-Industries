import React from 'react'
import Engineer from '../assets/SVG/Engineer.svg'
import Equipment from '../assets/SVG/Equipment.svg'
import Industry from '../assets/SVG/industry.svg'
import Machine from '../assets/SVG/machine.svg'
import '../stylesheet/section1.css'
const Section1 = () => {
  return (
    <div className='sec1-area'>
      <div className='sec1-info'>
        <div className='sec1-info-box'>
            <img src={Engineer} />
            <h3>Expert Engineers</h3>
            <div>
            <p>Our ability to deliver outstanding results for our clients starts with our team of smart, capable Expert Engineers.</p></div>
        </div>
        <div className='sec1-info-box'>
            <img src={Equipment} />
            <h3>Modern Equipments</h3>
            <div><p>Our current range of equipment demonstrates our commitment to quality tool & die making also the wide variety of businesses we serve</p></div>
        </div>
        <div className='sec1-info-box'>
            <img src={Industry} />
            <h3>Innovation</h3>
            <div>
            <p>With an extensive experience that has helped us to extract enough knowledge about the industry.</p>
            </div>
        </div>
        <div className='sec1-info-box'>
            <img src={Machine} />
            <h3>Aspect</h3>
           <div> <p>Open to new emerging challenges, Understanding client’s requirements accurately.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
