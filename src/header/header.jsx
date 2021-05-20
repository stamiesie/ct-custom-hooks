import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Hey Arnold Characters</h1>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </header>
  );
};

export default Header;
