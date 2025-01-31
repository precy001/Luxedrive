import React, { useEffect, useState } from 'react';
import '../styles/success.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/home');
    }
  }, [countdown, navigate]);

  return (
    <div className='success'>
      <div className="Success-brand-name">
        LuxeDrive
      </div>
      <div className='success-container'>
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <div className="success-message">
          Your Signup was successful
          <span className='redirect'> You'll be redirected to the Homepage in <span>{countdown}</span> </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;