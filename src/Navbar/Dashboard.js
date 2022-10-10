import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    let navigate = useNavigate()
    const pushHandler = () => navigate('/Contact')
    return (
        <div className='m-5'>
            <h1 className='text-primary'>This is Dashboard section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> Expedita nulla adipisci illo itaque molestiae soluta ullam sint cupiditate ipsum.<br /> Consequatur reprehenderit dolore aliquam eligendi maiores sunt accusamus, dolorum eaque praesentium?</p>
            <button onClick={pushHandler} className='btn btn-success'> Go to Contact</button>
        </div>
    )
}

export default Home
