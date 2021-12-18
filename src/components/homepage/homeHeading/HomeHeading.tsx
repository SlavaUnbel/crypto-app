import { Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface Props {
  heading: string;
  route: string;
}

const HomeHeading: FC<Props> = ({ heading, route }) => (
  <div className="home-heading-container">
    <Title level={2} className="home-title">
      {heading}
    </Title>

    <Title level={3} className="show-more">
      <Link to={route}>Show More</Link>
    </Title>
  </div>
);

export default HomeHeading;
