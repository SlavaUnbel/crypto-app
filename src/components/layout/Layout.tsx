import { Layout as LayoutUI } from 'antd';
import React, { FC } from 'react';

import Footer from '../footer/Footer';

const Layout: FC = ({ children }) => (
  <div className="main">
    <LayoutUI>
      <div className="routes">{children}</div>
    </LayoutUI>

    <Footer />
  </div>
);

export default Layout;
