import React, { useEffect, useRef } from 'react'
import '../stylesheet/machinary.css'
import VMC from '../assets/Machine/VMC.jpg'
import CNC from '../assets/Machine/CNC.png'

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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium nesciunt accusamus voluptatum facilis, atque labore porro! Nostrum, laudantium voluptatibus doloremque est incidunt, molestiae aliquam labore, nam accusantium blanditiis minus.Veritatis itaque iste culpa nihil harum! Commodi iste fugit repellendus illum fuga quia ea dolorem, dicta repudiandae, earum possimus libero, corporis dignissimos! Quas ex tempora molestias deserunt quis molestiae praesentium?</p>
            </div>
        </div>
        <div className='machine-area'>

        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium nesciunt accusamus voluptatum facilis, atque labore porro! Nostrum, laudantium voluptatibus doloremque est incidunt, molestiae aliquam labore, nam accusantium blanditiis minus.Veritatis itaque iste culpa nihil harum! Commodi iste fugit repellendus illum fuga quia ea dolorem, dicta repudiandae, earum possimus libero, corporis dignissimos! Quas ex tempora molestias deserunt quis molestiae praesentium?</p>

        </div>
        <img src={VMC}/>
        </div>
    </div> 
    </div>
  )
}

export default Machinary
