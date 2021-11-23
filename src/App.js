import './App.css';
import Login from './components/login/login'
import Home from './components/dashboard/Home';
import SideNav from './components/sideNav/sideNav';
import TopNav from './components/topnav/topNav';
import TextFieldWithLabel from './components/label/TextFieldWithLabel';
import { useState } from 'react';

function App() {
  // const [name, setName] = useState(0)
  // // setName("modified")
  // function change(e) {
  //   console.log(e)
  // }
  // function clickName() {
  //   setName(name + 1)
  // }
  return (
    <div className="bg-blue-400 h-screen">
      <header className="App-header">
        {/* <span>{name}</span> */}
        {/* <button onClick={clickName}>Submit</button> */}
        <TopNav/>
        {/* <SideNav /> */}
        <Home />
        {/* <Login /> */}
      </header>
      {/*
      <TextFieldWithLabel labelName="Hello Jorge" onChange={change} /> */}
    </div>
  );
}

export default App;
