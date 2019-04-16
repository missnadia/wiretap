import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
            <NavLink to="/ContactForm">Add New Contact</NavLink>
        </div>
    );
};

export default NavBar;