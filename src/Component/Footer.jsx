import React from 'react'
import Logo from "../assets/Logo.png"
import Location from "../assets/SVG/location.svg"
import Call from "../assets/SVG/call-footer.svg"
import Mail from "../assets/SVG/mail.svg"
import "../stylesheet/footer.css"
const Footer = () => {
    return (
        <div className='footer-page'>
            <div className='footer-company'>
                <div className='footer-company-detail'>
                    <img src={Logo} />
                    <h3>Nilkanth Industries</h3>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.698533842333!2d73.19092397481577!3d22.251514144662856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc59c02728613%3A0x17ec11b3ed7ba5bc!2sNilkanth%20industries!5e0!3m2!1sen!2sin!4v1739810316109!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <hr />
            <div className='footer-links'>
                <h3>Links</h3>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
            </div>
            <hr />

            <div className='footer-contacts'>
                <div><img src={Location} /><p>990, 1/A, Makarpura GIDC, Makarpura, Vadodara, Gujarat 390010.</p></div>
                <div><img src={Call} /><a href='tel:+91 9428479546'>+91 9428479546</a></div>
                <div><img src={Mail} /><a href='mailto:himanshup488@gmail.com'>himanshup488@gmail.com</a></div>
            </div>
            <div style={{width:'100%'}}>dsafhkjgsukfhsdlkfdskfjdslkfsdlk</div>
        </div>
    )
}

export default Footer
