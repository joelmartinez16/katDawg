// import { Link } from 'react-router-dom';
import React from 'react';
import Checkout_sessions from './client/pages/api/Checkout_sessions';



const NavBar = () => {
    
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">katDawg🐾 </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto" >
                        <li className="nav-item">
                            <a className="nav-link active" href="/Home">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AvailablePets">Available Adoptees</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Cart">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Checkout_sessions">Checkout_sessions</a>
                        </li>


                    </ul>
                    <button type="button" class="btn btn-outline-primary"><a href ="/Login">Login</a></button>
                    <button type="button" class="btn btn-outline-light">Signup</button>
                </div>
            </div>
            
        </nav>
    </>
}

export default NavBar;