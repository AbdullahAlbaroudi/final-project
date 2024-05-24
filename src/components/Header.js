import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div id="menu-btn" className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleMenu}></div>
      <Link to="/" className="logo"><img src={logo} alt="logo" />  <i className="fas fa-mug-hot"></i></Link>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/menu">products</Link>
        <Link to="/review">review</Link>
        <Link to="/SpecialRequest">Special Request</Link>
      </nav>
      
    </header>
  );
}

export default Header;
