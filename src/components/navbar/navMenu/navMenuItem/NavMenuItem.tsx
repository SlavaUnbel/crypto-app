import { Menu } from 'antd';
import React, { FC, ForwardRefExoticComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  icon: ForwardRefExoticComponent<Pick<any, any>>;
  title: string;
  route?: string;
}

const NavMenuItem: FC<Props> = ({ icon, title, route }) => (
  <Menu.Item icon={icon}>
    <Link to={`/${route}`}>{title}</Link>
  </Menu.Item>
);

export default NavMenuItem;
