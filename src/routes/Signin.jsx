import React, { useState } from 'react'
import '../styles/signup.css'
import { data, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const navigate = useNavigate()

  const [backEndResponse, setBackEndResponse] = useState(null)

  const[error, setError] = useState('')

  const[email, setEmail] = useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const[username, setUsername] = useState('')

  console.log(`Username : ${username}`)

  const[password, setPassword] = useState('')
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError("Email field is empty");
    } else if (password === "") {
      setError("Please create a password");
    } else {
      setError("");
  
      const url = "http://localhost/luxedrive/backend/sign_in_endpoint.php";
      let fdata = new FormData();
      fdata.append('email', email);
      fdata.append('password', password);
  
      axios.post(url, fdata)
        .then(response => {
          const data = response.data;
          setBackEndResponse(data); 
          if(data[0]  == 'success' && data[1]) {
            const backendUsername = data[1]
            setUsername(backendUsername);
            navigate('/home', {state: {email, username}})
          } else {
            alert(data);
          }
        })
        .catch(error => {
          alert("An error occurred: " + error.message);
        });
    }
  };
  

  return (

  

    <div className='auth-overall'>

        <div className="auth-container">
            <div className="auth-left">
                <div className="auth-left-head">Welcome to LuxeDrive</div>
                <div className="the-best">The Best Global Carsharing Marketplace</div>
                <div className="welcome-text">
                Your adventure starts here—welcome to stress-free car rentals!
                </div>

                <div className="video-intro-button nav-links">
                    <a href="" className='auth-link sign-up play-btn'>Play video intro &rarr;</a>
                </div>
            </div>

            <div className="auth-right">
                <div className="auth-brand-name">LuxeDrive</div>
                <div className="create">Sign in to Your Account</div>
                <div className="sign-up-note">
                  We'd love to have you on board! Join over 500+ customers around the globe and enhance productivity.
                </div>

                <div className="continue-google">
                <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

    const url_google = "http://localhost/luxedrive/backend/google_oauth.php";
    let fdata = new FormData();
    fdata.append('name', credentialResponseDecoded.name);
    fdata.append('email', credentialResponseDecoded.email);
    fdata.append('password', credentialResponseDecoded.sub)

    axios.post(url_google, fdata)
      .then(response => {
        const data = response.data;
        setBackEndResponse(data); 
        if (data === 'success') {
          window.location.href = "/home";  
          setUser({email });
        } else {
          alert(data); 
        }
      })
      .catch(error => {
        alert("An error occurred: " + error.message);
      });
  }}
  onError={() => {
    setError("An error occurred, please try again later");
  }}
/>

                </div>

                <hr className="auth-rule" />

                <form action="" className="sign-up-form">
                {error && <p className='error' style={{ color: "red" }}>{error}</p>}

                  <label htmlFor="" className='auth-label'>
                    Email*
                  </label>
                  <input 
                  type="email"
                  placeholder='Enter your email'
                  className='text-box'
                  value={email}
                  onChange={handleEmailChange}
                  />

                  <label htmlFor="" className='auth-label'>
                    Password*
                  </label>
                  <input 
                  type="password" 
                  placeholder='Create a password'
                  className='text-box'
                  value={password}
                  onChange={handlePasswordChange}
                  />

                  <div className="sign-up-btn">
                    <button className='the-button' onClick={(event) => handleSubmit(event)}>
                      Sign In
                    </button>
                  </div>
                  <div className="switch">
                    Already have an account, <Link to="/signup" className='switch-link'>Sign up</Link>
                  </div>
                </form>     
            </div>
        </div>
    </div>
  )
}

export default Signin