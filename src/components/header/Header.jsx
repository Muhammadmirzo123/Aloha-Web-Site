import React from 'react';
import './Header.css';
import img from "./IMAGE.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo"><img src={img} alt=''/></Link>
        <ul className="nav-links">
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
