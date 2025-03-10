import React, { useState } from 'react';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Signup = () => {
  const navigate = useNavigate();

  const [backEndResponse, setBackEndResponse] = useState(null);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleCheckChange = () => setIsChecked(!isChecked);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setError('Name field is empty');
    } else if (email === '') {
      setError('Email field is empty');
    } else if (password === '') {
      setError('Please create a password');
    } else if (confirmPassword === '') {
      setError('Please confirm your password');
    } else if (password.length < 8) {
      setError('Password too short');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!isChecked) {
      setError('Please agree to our terms');
    } else {
      setError('');
      const url = 'http://localhost/luxedrive/backend/sign_up_endpoint.php';
      let fdata = new FormData();
      fdata.append('name', name);
      fdata.append('email', email);
      fdata.append('password', password);

      axios
        .post(url, fdata)
        .then((response) => {
          if (response.data === 'success') {
            navigate('/success'); 
          } else {
            alert(response.data); 
          }
        })
        .catch((error) => alert('An error occurred: ' + error.message));
    }
  };

  return (
    <div className="auth-overall">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-left-head">Welcome to LuxeDrive</div>
          <div className="the-best">The Best Global Carsharing Marketplace</div>
          <div className="welcome-text">
            Your adventure starts here—welcome to stress-free car rentals!
          </div>

          <div className="video-intro-button nav-links">
            <a href=" " className="auth-link sign-up play-btn">
              Play video intro &rarr;
            </a>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-brand-name">LuxeDrive</div>
          <div className="create">Create an Account</div>
          <div className="sign-up-note">
            We'd love to have you on board! Join over 500+ customers around the globe and enhance productivity.
          </div>

          <div className="continue-google">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

                const url_google = 'http://localhost/luxedrive/backend/google_oauth.php';
                let fdata = new FormData();
                fdata.append('name', credentialResponseDecoded.name);
                fdata.append('email', credentialResponseDecoded.email);
                fdata.append('password', credentialResponseDecoded.sub);

                axios
                  .post(url_google, fdata)
                  .then((response) => {
                    const data = response.data;
                    setBackEndResponse(data);
                    if (data === 'success') {
                      const backendUsername = credentialResponseDecoded.name;
                      const userMail = credentialResponseDecoded.email;
                      localStorage.clear();
                      localStorage.setItem('username', backendUsername);
                      localStorage.setItem('email', userMail);
                      navigate('/success'); // Navigate to the success page after successful Google login
                    } else {
                      alert(data);
                    }
                  })
                  .catch((error) => {
                    alert('An error occurred: ' + error.message);
                  });
              }}
              onError={() => {
                setError('An error occurred, please try again later');
              }}
            />
          </div>

          <hr className="auth-rule" />

          <form action="" className="sign-up-form">
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
            <label htmlFor="" className="auth-label">
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="text-box"
              value={name}
              onChange={handleNameChange}
            />

            <label htmlFor="" className="auth-label">
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-box"
              value={email}
              onChange={handleEmailChange}
            />

            <label htmlFor="" className="auth-label">
              Password*
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="text-box"
              value={password}
              onChange={handlePasswordChange}
            />

            <label htmlFor="" className="auth-label">
              Confirm Password*
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="text-box"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            <div className="terms">
              <input
                type="checkbox"
                className="texk"
                checked={isChecked}
                onChange={handleCheckChange}
              />
              <span className="terms-section">
                I agree to the <Link to="/terms" className="terms-link">Terms and Conditions</Link>
              </span>
            </div>

            <div className="sign-up-btn">
              <button className="the-button" onClick={(event) => handleSubmit(event)}>
                Sign Up
              </button>
            </div>
            <div className="switch">
              Already have an account, <Link to="/signin" className="switch-link">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
