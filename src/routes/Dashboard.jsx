import React from 'react'
import HomeHeader from '../components/HomeHeader'
import TheDashboard from '../components/TheDashboard';
import Footer from '../components/Footer'

const Dashboard = () => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

      if(!username || !email){
    window.location.href = "/signin"
      }else{
        return (
            <div>
                <HomeHeader username={username}/>
                <TheDashboard/>
                <Footer />
            </div>
          )
      }
}

export default Dashboard