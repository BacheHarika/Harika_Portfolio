

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className='logo-container'>
          <div className='small-circle'></div>
          <Link to='/' style={{ textDecoration: 'none', color: 'BLACK' }}>
            <h6>Bache Harika</h6>
          </Link>
        </div>
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
          <div className='menu-toggle' onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </div>
          <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
            <li>
              <Link to='/resume'>Resume</Link>
            </li>
            <li className='separator'></li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='separator'></li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;






