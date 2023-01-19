import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-dark'>
        <div className='container'>
            <NavLink to="/" className="nav-link text-light">Home</NavLink>
            <NavLink to="/about" className="nav-link text-light">About</NavLink>
            <NavLink to="/blog" className="nav-link text-light">Blog</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
