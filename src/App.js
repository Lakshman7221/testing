import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./Navbar/Navbar";
import Home from "./Navbar/Home";
import Dashboard from "./Navbar/Dashboard";
import Contact from "./Navbar/Contact"


const App = () => {
  return (
    <>


      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App