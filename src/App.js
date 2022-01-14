import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { setHeaders } from './api';
import { getMe } from './api/endpoints/user';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import TopNav from './components/TopNav';
import { UserContext } from './context/userContext';
import Notfound from './Routes/404NF';
import About from './Routes/About';
import Dashboard from './Routes/Dashboard';
import Accounts from './Routes/Dashboard/Accounts';
import Archive from './Routes/Dashboard/Archive';
import Profile from './Routes/Dashboard/Profile';
import Violations from './Routes/Dashboard/Violations';
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
      getMe().then(res => res && setUser({ ...res, token }))
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
          <Route element={<Login ><div className='overflow-hidden' ></div> </Login>} path="/login" />
          <Route path="/gallery" element={<Private component={Gallery} />} />
          <Route path="/stream" element={<Private component={VideoStream} />} />
          <Route path="/dashboard" element={<Private component={Dashboard} />} />
          <Route path="/profile" element={<Private component={Profile} />} />
          <Route path="/accounts" element={<Private component={Accounts} />} />
          <Route path="/violation" element={<Private component={Violations} />} />
          <Route path="/archive" element={<Private component={Archive} />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  );
}


export default App;
