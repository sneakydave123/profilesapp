// src/NavBar.jsx (example)
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from '../About';
import Login from '../Login'; 
import './style.css';
function NavBar() {
return (
    <nav className="navbar">
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/About">About</Link></li>
            {/* Add more links as needed */}
        </ul>
    </nav>
);
}

export default NavBar;