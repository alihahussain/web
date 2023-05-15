import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";
import Profile from "./pages/home/profilee/Profile";
import {

  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
function App() {
  return (
    <div>
      <Profile/>
    </div>
  );
}

export default App;
