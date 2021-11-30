import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/dashboard/Home';
import Login from './components/login/login';
import TopNav from './components/topnav/topNav';
import About from './Routes/About';
import Gallery from './Routes/Gallery';
import Register from './Routes/Register';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
} 

function App(){
  const token = getToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <TopNav />
      <BrowserRouter>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
