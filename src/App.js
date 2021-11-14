import './App.css';
import Login from './components/login/login'
import Home from './components/dashboard/home';
import SideNav from './components/sideNav/sideNav';
import TopNav from './components/topnav/topNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        {/*<SideNav />
        <Home /> */}
      </header>
        <Login />
    </div>
  );
}

export default App;
