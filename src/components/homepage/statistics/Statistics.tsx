import { Col, Row, Statistic } from 'antd';
import millify from 'millify';
import React, { FC } from 'react';

import { useGetCryptosQuery } from '../../../services/cryptoAPI';

const Statistics: FC = () => {
  const { data } = useGetCryptosQuery(10);

  const {
    total,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    totalMarkets,
  } = data?.data?.stats || {};

  return (
    <Row>
      <Col span={12}>
        <Statistic title="Total Cryptocurrencies" value={millify(total)} />
      </Col>

      <Col span={12}>
        <Statistic title="Total Exchanges" value={millify(totalExchanges)} />
      </Col>

      <Col span={12}>
        <Statistic title="Total Market Cap" value={millify(totalMarketCap)} />
      </Col>

      <Col span={12}>
        <Statistic title="Total 24h Volume" value={millify(total24hVolume)} />
      </Col>

      <Col span={12}>
        <Statistic title="Total Markets" value={millify(totalMarkets)} />
      </Col>
    </Row>
  );
};

export default Statistics;
