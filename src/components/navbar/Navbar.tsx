import React, { FC } from 'react';

import Logo from './logo/Logo';
import NavMenu from './navMenu/NavMenu';

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Logo />

        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
