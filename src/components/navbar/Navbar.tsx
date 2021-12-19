import React, { FC, useEffect, useState } from 'react';

import Logo from './logo/Logo';
import NavMenu from './navMenu/NavMenu';

const Navbar: FC = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => setActiveMenu(screenSize < 800 ? false : true), [screenSize]);

  return (
    <div className="navbar">
      <div className="nav-container">
        <Logo activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {activeMenu && <NavMenu />}
      </div>
    </div>
  );
};

export default Navbar;
