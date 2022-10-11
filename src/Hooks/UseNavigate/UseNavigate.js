import React from 'react'
import Home from "./inside-pages/Home"
import Dashboard from "./inside-pages/Dashboard"
import { Routes, BrowserRouter, Route } from 'react-router-dom'
const UseNavigate = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default UseNavigate
