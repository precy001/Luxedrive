import React from 'react'
import '../styles/footer.css'
import facebookIcon from '../assets/icons/facebook.png'
import instagramIcon from '../assets/icons/instagram.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import xIcon from '../assets/icons/x.png'

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-section name-and-socials">
                <div className="name">
                    LuxeDrive
                </div>

                <div className="footer-short-note">
                    It's just a drive away, take control of your journey today!
                </div>

                <div className="icons">
                    <div className="each-icon"><img src={facebookIcon} alt="" /></div>
                    <div className="each-icon"><img src={instagramIcon} alt="" /></div>
                    <div className="each-icon"><img src={linkedinIcon} alt="" /></div>
                    <div className="each-icon"><img src={xIcon} alt="" /></div>
                </div>
            </div>

            <div className="footer-section city">
                <div className="head-title">City</div>
                    <li>Ikorodu</li>
                    <li>Abuja</li>
                    <li>Ibadan</li>
                    <li>Ikeja</li>
                    <li>Akeokuta</li>
            </div>

            <div className="footer-section vehicle-types">
                <div className="head-title">Vehicle types</div>
                <li>Cars</li>
                <li>Bikes</li>
            </div>

        </div>
    </div>
  )
}

export default Footer