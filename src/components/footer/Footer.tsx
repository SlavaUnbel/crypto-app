import { Space, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../utils/contants';

const Footer: FC = () => {
  return (
    <div className="footer">
      <Typography.Title level={5} className="footer-text">
        Cryptoverse <br />
        All rights reserved
      </Typography.Title>

      <Space>
        <Link to={routes.home}>Home</Link>

        <Link to={routes.exchanges}>Exchanges</Link>

        <Link to={routes.news}>News</Link>
      </Space>
    </div>
  );
};

export default Footer;
