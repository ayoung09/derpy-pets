import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <a><Link to="/">Home</Link></a>
    <a><Link to="/cats">Cats</Link></a>
    <a><Link to="/dogs">Dogs</Link></a>
    <a className="favorites-link">
      <Link to="/favorites">
        favorites
      </Link>
    </a>
  </nav>
);

export default Navbar;