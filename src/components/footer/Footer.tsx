import { Space, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Footer: FC = () => {
  return (
    <div className="footer">
      <Title level={5} className="footer-text">
        Cryptoverse <br />
        All rights reserved
      </Title>

      <Space>
        <Link to="/">Home</Link>

        <Link to="/exchanges">Exchanges</Link>

        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
