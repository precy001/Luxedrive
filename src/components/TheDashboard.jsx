import React from 'react'
import '../styles/dashboard.css'
import { useRef } from 'react'

const TheDashboard = () => {

  const dashboardRef = useRef(null)
  const profileRef = useRef(null)
  const orderRef = useRef(null)
  const termsRef = useRef(null)
  const signoutRef = useRef(null)
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')

  const handleDashboardClick = () => {
    dashboardRef.current.classList.add('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')
  }

  const handleProfileClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.add('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')
  }

  const handleOrderClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.add('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')
  }

  const handleTermsClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.add('active-dashboard-btn')
    signoutRef.current.classList.remove('active-dashboard-btn')
  }

  const handleSignoutClick = () => {
    dashboardRef.current.classList.remove('active-dashboard-btn')
    profileRef.current.classList.remove('active-dashboard-btn')
    orderRef.current.classList.remove('active-dashboard-btn')
    termsRef.current.classList.remove('active-dashboard-btn')
    signoutRef.current.classList.add('active-dashboard-btn')
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
                
              </div>
            </div>
        </div>
      )
    }
}

export default TheDashboard