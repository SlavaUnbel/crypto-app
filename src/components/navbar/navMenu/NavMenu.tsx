import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../utils/contants';

const NavMenu: FC = () => {
  return (
    <Menu theme="dark" className="nav-menu">
      <Menu.ItemGroup>
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          <Link to={routes.home}>Home</Link>
        </Menu.Item>

        <Menu.Item key="Cryptocurrencies" icon={<FundOutlined />}>
          <Link to={routes.cryptos}>Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item key="Exchanges" icon={<MoneyCollectOutlined />}>
          <Link to={routes.exchanges}>Exchanges</Link>
        </Menu.Item>

        <Menu.Item key="News" icon={<BulbOutlined />}>
          <Link to={routes.news}>News</Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

export default NavMenu;
