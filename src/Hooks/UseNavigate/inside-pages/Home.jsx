import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
const Home = () => {
    const navgate = useNavigate()
    const clickHandler = () => navgate('/dashboard')
    return (
        <div>

            <h1>Welcome to Home Page</h1>
            <h3>we create wonderful thinks</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur?</h5><br />
            <button onClick={clickHandler} className='btn btn-danger'>go to Dashboard</button>
        </div>
    )
}

export default Home
