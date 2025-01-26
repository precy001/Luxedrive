import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import blackBmw from '../assets/images/black-bmw.png'

const HomeHeader = (props) => {
  return (
    <div>
        <div className="main-header">
            <div className="nav">
                <div className="brand-name">LuxeDrive</div>

                <div className="nav-links">
                    Welcome, <b>{props.username}</b>
                </div>
            </div>

            <div className="header-page-container">
                <div className="left">
                    <div className="unlock">
                        Unlock endless driving with Luxedrive
                    </div>

                    <div className="short-note">
                        To contribute to positivity change and achieve our <br />sustainability goals with many extra ordinary
                    </div>

                    <div className="rent-btns">
                    <Link to="/signin" className='auth-link sign-up'>Rent Car</Link>
                    <Link to="/signin" className='auth-link sign-in'>Rent Bike</Link>
                    </div>
                </div>
                <div className="right">
                    <img src={blackBmw} alt="" className='right-img'/></div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader