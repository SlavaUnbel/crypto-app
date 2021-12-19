import { Col, Row, Statistic } from 'antd';
import React, { FC } from 'react';

import { millifyHoc } from '../../../app/utils';

interface Props {
  stats: any;
  isLoading: boolean;
}

const Statistics: FC<Props> = ({ stats, isLoading }) => {
  const {
    total,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    totalMarkets,
  } = stats;

  return (
    <Row>
      <Col span={12}>
        <Statistic
          title="Total Cryptocurrencies"
          value={!isLoading ? millifyHoc(total) : ""}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total Exchanges"
          value={!isLoading ? millifyHoc(totalExchanges) : ""}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total Market Cap"
          value={!isLoading ? millifyHoc(totalMarketCap) : ""}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total 24h Volume"
          value={!isLoading ? millifyHoc(total24hVolume) : ""}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total Markets"
          value={!isLoading ? millifyHoc(totalMarkets) : ""}
        />
      </Col>
    </Row>
  );
};

export default Statistics;
