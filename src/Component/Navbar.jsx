import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AbdoutDropdown from './AbdoutDropdown';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className={`main ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar'>
        <div className="logo">
          <Link style={{textDecoration:'none'}} to="/HomePage"><p>Banker.</p></Link>
        </div>
        <div className='navbar-buttons'>
          <a className='navbar-button' href='#home'>Home</a>
          <a className='navbar-button' href='#about'>About</a>
          <a
            className='navbar-button'
            href='#services'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {showDropdown && <AbdoutDropdown />}
          </a>
          <a className='navbar-button' href='#contact'>Contact</a>
          <Link style={{textDecoration:'none'}} className='navbar-signin-button' to='Signin'>Sign in</Link>
        </div>
      </div>
    </div>
  );
}