import React from 'react'
import '../stylesheet/quality.css'
import CustSat from '../assets/SVG/customer.png'
import Improv from '../assets/SVG/improvement.png'

const Quality = () => {
    return (
        <div className='quality-page'>
            <div className='quality-cont'>
                <div>

                <h1>Quality Policy</h1>

                <p>Nilkanth Engineering's focus is to build long-term, successful relationships with customers. This will be achieved through a process of continuous improvement, understanding our customer’s expectations, providing innovative solutions, engineering support and quality machines in a timely fashion.
                    </p><p>  Our products are 100% safe to use and are designed to make lives better. Leading companies are among the satisfied customers of the services offered by us. Stay assured of the quality of our amazing products. Many payment options are available, and with emergency delivery options, it becomes a complete package of trust and genuineness.</p>
                 
                </div>

                <div className='quality-box'>
                    <div className='quality-box-cont'>
                        <img src={CustSat} />
                        <h3>Customer Satisfaction</h3>
                        
                            <p>With our guarantee to deliver on time and without defects, we have become a leader in our industry for over two decades.</p>
                    </div>
                    <div className='quality-box-line'>

                    </div>
                    <div className='quality-box-cont'>
                        <img src={Improv} />
                        <h3>Continuous Improvement</h3>
                      
                            <p>We will ultimately achieve our financial results and build loyal customers with superior execution in every aspect of our business.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality
