import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    const pushHandler = () => navigate("/Dashboard");

    return (
        <>

            <div className='m-5'>
                <h1 className='text-primary'>Welcome to Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nulla adipisci illo itaque molestiae soluta ullam sint cupiditate ipsum. Consequatur reprehenderit dolore aliquam eligendi maiores sunt accusamus, dolorum eaque praesentium?</p>
                <button onClick={pushHandler} className='btn btn-success'> Go to Dashboard</button>

            </div>
        </>
    )
}

export default Home
