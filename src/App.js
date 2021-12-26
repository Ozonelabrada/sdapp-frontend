import React, { Profiler } from 'react';
import { Routes, Route } from 'react-router-dom';
import { setHeaders } from './api';
import { getMe } from './api/endpoints/user';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import TopNav from './components/TopNav';
import { UserContext } from './context/userContext';
import About from './Routes/About';
import Dashboard from './Routes/Dashboard';
import Gallery from './Routes/Gallery';
import Private from './Routes/Private';
import Register from './Routes/Register';
import VideoStream from './Routes/VideoStream';

let token = null

function App() {
  const { user, setUser } = React.useContext(UserContext);
  try {
    token = localStorage.getItem('token')
    setHeaders("Authorization", `Bearer ${token}`)
  } catch (e) { localStorage.removeItem('token') }

  React.useEffect(() => {
    if (!user && token) {
      getMe().then(res => setUser({ ...res, token }))
    }
  }, [])

  return (
    <div>
      <TopNav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route path="/gallery" element={<Private component={Gallery} />} />
        <Route path="/stream" element={<Private component={VideoStream} />} />
        <Route path="/dashboard" element={<Private component={Dashboard} />} />
      </Routes>
    </div>
  );
}


export default App;
