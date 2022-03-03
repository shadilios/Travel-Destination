import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";



//  fix second route 
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/city/:id" element={<Home/>} />


    </Routes>
      
  )
}

export default App;