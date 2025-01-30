import React from 'react'
import HomeHeader from '../components/HomeHeader';
import { useLocation , useNavigate} from 'react-router-dom'
import HomeRent from '../components/HomeRent';
import Footer from '../components/Footer';
import "../styles/home.css"


const Home = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  if(!username || !email){
    window.location.href = "/signin"
  }else{
    return (
      <div>
        <HomeHeader username= {username}/>
        <HomeRent />
        <Footer />
      </div>
    )
  }

   
}

export default Home