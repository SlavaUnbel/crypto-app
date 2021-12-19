import { Layout as LayoutUI } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import Footer from '../footer/Footer';
import ScrollTop from '../scrollTop/ScrollTop';

const Layout: FC = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100 ? true : false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main">
      <LayoutUI>
        <div className="routes">{children}</div>
      </LayoutUI>

      <Footer />

      {scrolled && <ScrollTop />}
    </div>
  );
};

export default Layout;
