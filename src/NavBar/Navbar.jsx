// src/NavBar.jsx (example)
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from '../About';
import Login from '../Login'; 
import './style.css';
function NavBar({ language }) {
return (
    <nav className="navbar">
        <ul>
            <li><Link to="/login">{language === 'en' ? 'Login' : language === 'es' ? 'Iniciar sesión' : 'Nom d\'utilisateur:'}</Link></li>
            <li><Link to="/about">{language === 'en' ? 'About' : language === 'es' ? 'Acerca de' : 'Nom d\'utilisateur:'}</Link></li>
            <li><Link to="/foreman">Foreman</Link></li>
            {/* Add more links as needed */}
        </ul>
    </nav>
);
}

export default NavBar;