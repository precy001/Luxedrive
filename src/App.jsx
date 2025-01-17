import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Static/Header/Header';
import Signin from './Components/signinup/Signin/Signin';
import Hero from './Hero/Hero';

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
