import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface Props {
  activeMenu: boolean;
  setActiveMenu: (active: boolean) => void;
}

const Logo: FC<Props> = ({ activeMenu, setActiveMenu }) => (
  <div className="logo-container">
    <Avatar src={process.env.PUBLIC_URL + "/images/favicon.png"} size="large" />

    <Title level={2} className="logo">
      <Link to="/">Cryptoverse</Link>
    </Title>

    <Button
      className="menu-control-container"
      onClick={() => setActiveMenu(!activeMenu)}
    >
      <MenuOutlined />
    </Button>
  </div>
);

export default Logo;
