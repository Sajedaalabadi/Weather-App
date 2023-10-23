import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';

const Header = () => {
  return (
    <header className="fixed-header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services">
              <i className="fa fa-cogs"></i> Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus">
              <i className="fa fa-envelope"></i> Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <i className="fa fa-info-circle"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team">
              <i className="fa fa-users"></i> Team
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
