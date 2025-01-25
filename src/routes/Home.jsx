import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'


const Home = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  const {state} = useLocation()
  if(state){
    setIsLoggedIn(!isLoggedIn)
  }

  if(isLoggedIn){
    window.location.href = "signin"
  }

    return (
      <div>
  
      </div>
    )
}

export default Home