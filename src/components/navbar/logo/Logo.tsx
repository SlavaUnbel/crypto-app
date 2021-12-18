import { Avatar, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Logo: FC = () => (
  <div className="logo-container">
    <Avatar src={process.env.PUBLIC_URL + "/images/favicon.png"} size="large" />

    <Title level={2} className="logo">
      <Link to="/">Cryptoverse</Link>
    </Title>
  </div>
);

export default Logo;
