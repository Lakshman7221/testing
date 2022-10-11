import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Home = () => {
    let navigate = useNavigate()
    const pushHandler = () => navigate('/Gallery')
    // const { fname, lname } = useParams()

    return (
        <>
            <div className='m-5'>
                <h1 className='text-primary'>How can Help You?</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Expedita nulla adipisci illo itaque.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sed alias obcaecati animi magnam maxime molestiae quam incidunt enim facilis assumenda quibusdam aut blanditiis, quaerat nihil cumque quae placeat nobis!</p>
                <button onClick={pushHandler} className='btn btn-success'> Go to Gallery</button>
            </div>

        </>
    )
}

export default Home


