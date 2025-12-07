import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './SignUp'
import Login from './Login'
import Welcome from './Welcome'
import "./App.css";

function App() {
   
       return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
  
}

export default App