import { Col, Typography } from 'antd';
import React, { FC } from 'react';

const { Title } = Typography;

interface Props {
  details: any;
}

const CryptoDetailsHeader: FC<Props> = ({ details }) => {
  return (
    <Col className="coin-heading-container">
      <Title level={2} className="coin-name">
        {details.name} ({details.slug}) Price
      </Title>

      <p>
        {details.name} live price in US Dollar (USD). View value statistics,
        market cap and supply.
      </p>
    </Col>
  );
};

export default CryptoDetailsHeader;
