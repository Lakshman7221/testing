import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const clickHandler = () => navigate("/")
    return (
        <div>
            <h1>Welcome to Nature Dashboard...!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Debitis nulla quae magni quisquam.<br /> Laboriosam quaerat hic pariatur quo, sequi, <br />magni repudiandae dignissimos, nobis perferendis<br /> consectetur placeat nemo officiis unde eaque.</p>
            <button onClick={clickHandler} className='btn btn-primary'>go to home</button>
        </div>

    )
}

export default Dashboard
