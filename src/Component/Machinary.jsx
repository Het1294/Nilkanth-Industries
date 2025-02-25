import React, { useEffect, useRef } from 'react'
import '../stylesheet/machinary.css'
import VMC from '../assets/Machine/lx20t l5.png'
import CNC from '../assets/Machine/KTM.jpg'

const Machinary = ({setAboutTop}) => {
    const M = useRef(null)
      useEffect(()=>{
          if(M!==null){
              setAboutTop(M.current.offsetTop);
          }
      })
  return (
    <div className='machinary-page' ref={M}>
     <h1>Manufacturing Facility</h1>
     <div className='machine-img'>
        <div className='machine-area'>
            <img src={CNC}/>
            <div>
                <p>At Nilkanth Industries, we employ the KTM RIG 600T, a high-performance CNC lathe machine known for its precision and efficiency. This machine excels in turning, facing, drilling, and threading operations, making it ideal for machining complex cylindrical components. With its advanced control system and robust design, the RIG 600T ensures high accuracy, repeatability, and smooth surface finishes. It is widely used for manufacturing automobile parts, precision shafts, and customized industrial fittings, enabling us to meet the stringent quality standards required in modern engineering industries.</p>
            </div>
        </div>
        <div className='machine-area'>

        <div>
        <p>Another essential machine in our facility is the LX20T L5, a state-of-the-art CNC lathe designed for high-speed and precision machining. This machine offers superior performance in fine turning, boring, grooving, and intricate thread cutting, making it highly suitable for producing high-accuracy components. Equipped with an advanced control panel and automated tool-changing capabilities, the LX20T L5 enhances productivity and ensures minimal manual intervention. It is ideal for crafting small to medium-sized precision components used in industries such as aerospace, automotive, and general engineering. </p>

        </div>
        <img src={VMC}/>
        </div>
    </div> 
    </div>
  )
}

export default Machinary
