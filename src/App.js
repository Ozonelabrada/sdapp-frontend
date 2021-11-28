import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/dashboard/Home';
import TopNav from './components/topnav/topNav';
import About from './Routes/About';
import Gallery from './Routes/Gallery';
const App = () => {
  return (
    <div className="overflow-hidden">
      <TopNav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Gallery />} path="/gallery" />
      </Routes>
    </div>
  );
}

export default App;
