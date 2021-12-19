import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const { Item } = Menu;

const NavMenu: FC = () => (
  <Menu theme="dark" className="nav-menu">
    <Item key="Home" icon={<HomeOutlined />}>
      <Link to="/">Home</Link>
    </Item>

    <Item key="Cryptocurrencies" icon={<FundOutlined />}>
      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
    </Item>

    <Item key="Exchanges" icon={<MoneyCollectOutlined />}>
      <Link to="/exchanges">Exchanges</Link>
    </Item>

    <Item key="News" icon={<BulbOutlined />}>
      <Link to="/news">News</Link>
    </Item>
  </Menu>
);

export default NavMenu;
