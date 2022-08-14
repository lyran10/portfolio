import logo from './logo.svg';
import './App.css';
import {Home} from "./component/home.js"
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="">
      <Home />
      <Routes>
        <Route path=""/>
      </Routes>
    </div>
  );
}

export default App;
