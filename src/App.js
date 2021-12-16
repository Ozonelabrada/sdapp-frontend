import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import TopNav from './components/TopNav';
import About from './Routes/About';
import Dashboard from './Routes/Dashboard';
import Gallery from './Routes/Gallery';
import Register from './Routes/Register';
import VideoStream from './Routes/VideoStream';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if (!token) {
    // return <Login setToken={setToken} />
  }
  return (
    <div>
      <TopNav />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<VideoStream />} path="/stream" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </div>
  );
}

export default App;
