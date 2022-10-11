import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./MainRoute.css"
import Navbar from "./inside-pages/Navbar";
import Home from "./inside-pages/Home";
import Dashboard from "./inside-pages/Dashboard";
import Contact from "./inside-pages/Contact"


const MainRoute = () => {
    return (
        <>


            <BrowserRouter>
                <Navbar />


                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Dashboard" element={<Dashboard />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>

                </Routes>


            </BrowserRouter>
        </>
    )
}

export default MainRoute