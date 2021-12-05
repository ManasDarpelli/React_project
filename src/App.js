import React from "react";
import "./App.css";
// import Restaurant from "./component/Restaurant";
// import { Menu } from "./component/Api/menuApi";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Navbar/Home";
import Service from "./Navbar/Service";
import Contact from "./Navbar/Contact";
import About from "./Navbar/About";
import Navbar from "./Navbar/Navbar";
// Routes = switch
const App = () => {
  return (
    
      <Router>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/service" element={<Service/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/about" element={<About/>}/>
       </Routes>
      </Router>
    
  );
};

export default App;
