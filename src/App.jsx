import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct";

function App() {


  return (
    <>
     <Router>
      <Navbar/>
      <Routes >
        <Route path="/" element = { <Home/> }/>
        <Route path="/producto/:id" element = { <DetailsProduct/> }/>
      </Routes> 
     </Router>
    </>
  )
}

export default App
