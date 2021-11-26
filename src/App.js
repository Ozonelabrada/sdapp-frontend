import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/topnav/topNav';
import About from './Routes/About';
import Gallery from './Routes/Gallery';
import LandingPage from './Routes/Gallery'
const App = () => {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LandingPage />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Gallery />} path="/gallery" />
      </Routes>
    </div>
  );
}

export default App;
