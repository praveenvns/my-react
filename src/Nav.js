import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {

const navStyle = {
    color: '#fff'
}    

  return (
<nav>
    <h3>Logo Here</h3>
    <ul className="nav-link">
        <Link style={navStyle} to="/about">
        <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
        <li>Shop</li>
        </Link>
    </ul>
</nav>

  );
}

export default Nav;