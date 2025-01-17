import React, { useState } from 'react';
import styled from 'styled-components';
import face from '../../../assets/facebook.svg';
import google from '../../../assets/google.svg';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  min-height: 100vh;

`;

const Note = styled.div`
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 768px) {
    text-align: left;
  }

  p {
    font-size: 16px;
    color: #777;
    margin-top: 10px;
    max-width: 500px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;

  button {
    padding: 10px;
    font-size: 14px;
    width: 100%;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  .facebook {
    background-color: rgb(218, 218, 222);
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .google {
    background-color: rgb(218, 218, 222);
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;

  label {
    font-size: 16px;
    font-weight: 900;
    color: #555;
  }

  input {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
    }
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    label {
      font-weight: normal;
      color: #555;
    }
  }

  .submit {
    padding: 14px;
    font-size: 16px;
    background-color:black;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s ease-in-out;

    &:hover {
      background-color:white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
      color: black;
    }

    &:active {
      background-color: #004085;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      transform: translateY(0);
    }

    &:focus {
      outline: none;
    }
  }

  .error {
    color: red;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

const Signin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear error when the user starts typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(''); // Clear error when the user starts typing
  };

  const isPasswordValid = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else if (!isPasswordValid()) {
      setError('Password must contain at least one uppercase letter, one number, and one special character.');
    } else if (!isChecked) {
      setError('You must agree to the Terms and Privacy Policy.');
    } else {
      setError('');
      // Here you would typically handle form submission (API call or other actions)
      console.log('Form submitted successfully!');
    }
  };

  return (
    <Main>
      <Note>
        <h2>Create An Account</h2>
        <p>We'd love to have you on board. Join over 500+ customers around the globe and enhance productivity.</p>
      </Note>
      <Buttons>
        <button className="facebook">
          <img src={face} width="40" />Continue with Facebook
        </button>
        <button className="google">
          <img src={google} width="35" /> Continue with Google
        </button>
      </Buttons>
      <Form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        
        <label>Password</label>
        <input 
          type={passwordVisible ? 'text' : 'password'} 
          placeholder="Enter your password" 
          required 
          value={password}
          onChange={handlePasswordChange}
        />
        <label>Confirm Password</label>
        <input 
          type={passwordVisible ? 'text' : 'password'} 
          placeholder="Confirm your password" 
          required 
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        
        <div>
          <label>
            <input 
              type="checkbox" 
              onChange={() => setPasswordVisible(!passwordVisible)} 
            /> Show Password
          </label>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="checkbox-container">
          <input 
            type="checkbox" 
            id="terms" 
            checked={isChecked} 
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terms">I agree to the <a href="/terms">Terms and Privacy Policy</a></label>
        </div>

        <button type="submit" className="submit">
          Sign Up
        </button>
      </Form>
    </Main>
  );
};

export default Signin;
