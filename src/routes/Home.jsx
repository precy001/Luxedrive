import React from 'react'
import { useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const username = query.get('username') || localStorage.getItem('username');
  const email = query.get('email') || localStorage.getItem('email');

  if(!username || !email){
    window.location.href = "/signin"
  }else{
    return (
      <div>
        welcome {username}
      </div>
    )
  }

   
}

export default Home