import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        
        <nav>
            <div className="link-container">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/service">services</Link>
                <Link className="link" to="/about">About</Link>
                </div>
                {/* to contain is always small */}
        </nav>
    )
}

export default Navbar
