import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Charity Donations</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#donate">Donate</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
