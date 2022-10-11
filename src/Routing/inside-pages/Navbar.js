import React from 'react';
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <>

            <ul className="nav justify-content-end bg-danger ">
                <NavLink to="/Home">
                    <li className="nav-item "> <a className="nav-link  text-white" href="#">Home</a>                    </li>
                </NavLink>

                <NavLink to="/Dashboard">
                    <li className="nav-item"><a className="nav-link text-white" href="#">Dashboard</a> </li>
                </NavLink>

                <NavLink to="/Contact">
                    <li className="nav-item"> <a className="nav-link text-white" href="#">Contact</a> </li>
                </NavLink>

            </ul>

        </>
    )
}

export default Navbar
