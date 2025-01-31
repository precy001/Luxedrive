import React from 'react'
import '../styles/dashboard.css'
import { useRef } from 'react'
import DashboardData from './DashboardData'

const TheDashboard = () => {

  const dashboardRef = useRef(null)
  const profileRef = useRef(null)
  const orderRef = useRef(null)
  const termsRef = useRef(null)
  const signoutRef = useRef(null)
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')

  /* props ref*/

  const dashboardDataRef = useRef(null)
  const profileDataRef = useRef(null)
  const orderDataRef = useRef(null)
  const termsDataRef = useRef(null)
  const signoutDataRef = useRef(null)
  /*end*/

  const handleDashboardClick = () => {
    dashboardRef.current.classList.add('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')

    dashboardDataRef.current.style.display = "block"
    profileDataRef.current.style.display = "none"
    orderDataRef.current.style.display = "none"
    termsDataRef.current.style.display = "none"
    signoutDataRef.current.style.display = "none"
  }

  const handleProfileClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.add('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')

    dashboardDataRef.current.style.display = "none"
    profileDataRef.current.style.display = "block"
    orderDataRef.current.style.display = "none"
    termsDataRef.current.style.display = "none"
    signoutDataRef.current.style.display = "none"
  }

  const handleOrderClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.add('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')

    dashboardDataRef.current.style.display = "none"
    profileDataRef.current.style.display = "none"
    orderDataRef.current.style.display = "block"
    termsDataRef.current.style.display = "none"
    signoutDataRef.current.style.display = "none"
  }

  const handleTermsClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.add('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')

    dashboardDataRef.current.style.display = "none"
    profileDataRef.current.style.display = "none"
    orderDataRef.current.style.display = "none"
    termsDataRef.current.style.display = "block"
    signoutDataRef.current.style.display = "none"
  }

  const handleSignoutClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.add('active-dashboard-btn')

    dashboardDataRef.current.style.display = "none"
    profileDataRef.current.style.display = "none"
    orderDataRef.current.style.display = "none"
    termsDataRef.current.style.display = "none"
    signoutDataRef.current.style.display = "block"
  }

    if(!username || !email){
    window.location.href = "/signin"
    }else{
      return (
        <div>
            <div className="whole-profile-container">
              <div className="profile-box">
                <center>
                <div className="profile-img">
                  
                </div>
    
                <div className="dashboard-username">
                {localStorage.getItem('username')}
                </div>
    
                <div className="dashboard-email">
                  {localStorage.getItem('email')}
                </div>
    
                <div className="dashboard-buttons-container">
                  <button 
                  className='active-dashboard-btn'
                  ref={dashboardRef}
                  onClick={handleDashboardClick}
                  >
                    Dashboard
                  </button>
    
    
                  <button
                    ref={profileRef}
                    onClick={handleProfileClick}
                  >
                    My Profile
                  </button>
    
    
                  <button
                    ref={orderRef}
                    onClick={handleOrderClick}
                  >
                    My Order
                  </button>
    
    
                  <button
                    ref={termsRef}
                    onClick={handleTermsClick}
                  >
                    Terms & Conditions
                  </button>
    
    
                  <button
                    ref={signoutRef}
                    onClick={handleSignoutClick}
                  >
                    Sign Out
                  </button>
                </div>
                </center>
              </div>


              <div className="all-data-contaianer">
                <DashboardData 
                dashboardDataRef = {dashboardDataRef} 
                profileDataRef = {profileDataRef} 
                orderDataRef = {orderDataRef}
                termsDataRef = {termsDataRef}
                signoutDataRef = {signoutDataRef}
                />
              </div>
            </div>
        </div>
      )
    }
}

export default TheDashboard