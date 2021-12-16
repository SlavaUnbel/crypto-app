import { Avatar, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { navIcon } from '../../../utils/contants';

const Logo: FC = () => (
  <div className="logo-container">
    <Avatar src={navIcon} size="large" />

    <Typography.Title level={2} className="logo">
      <Link to="/">Cryptoverse</Link>
    </Typography.Title>
  </div>
);

export default Logo;
