import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from "react-icons/ri";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  position: relative;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: #333;
  cursor: pointer;
`;

const MiddleNav = styled.div`
  display: flex;
  gap: 30px;
  font-size: 16px;
  color: #555;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color:rgb(0, 0, 0);
    }

    svg {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }

  button {
    padding: 12px 25px;
    font-size: 14px;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid transparent;  // Set default border to transparent

    &.signup {
    background-color: black; 
      color:white; 
     
    }

    &.signin {
      border: 2px solid #000; 
      color: #000; 
      
   
    }

  }
`;


const Button = styled.button`
  padding: 12px 25px;
  font-size: 14px;
  background-color: transparent;
  
 `




const HamburgerMenu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.3s ease-out;

  p {
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }

  button {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignUpClick = () => {
    navigate('/signin');  
  };

  return (
    <Navigation>
      <Logo>
        <strong>LuxeDrive</strong>
      </Logo>
      <MiddleNav>
        <p>Hosting <RiArrowDownSLine /></p>
        <p>Contact Us</p>
        <p>Account <RiArrowDownSLine /></p>
      </MiddleNav>
      <Buttons>
        <button className='signin'>Sign In</button>
        <button className='signup' onClick={handleSignUpClick}>Sign Up</button>  {/* Add onClick handler */}
      </Buttons>
      <HamburgerMenu onClick={toggleMenu}>
        <GiHamburgerMenu />
      </HamburgerMenu>
      <MobileNav isOpen={isOpen}>
        <p>Hosting <RiArrowDownSLine /></p>
        <p>Contact Us</p>
        <p>Account <RiArrowDownSLine /></p>
        <Button>Sign In</Button>
        <Button onClick={handleSignUpClick}>Sign Up</Button>  
      </MobileNav>
    </Navigation>
  );
};

export default Header;

