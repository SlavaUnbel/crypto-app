import { Col, Row } from 'antd';
import React, { FC } from 'react';

import { useGetExchangesQuery } from '../../services/cryptoAPI';
import Loader from '../loader/Loader';
import ExchangePanel from './exchangePanel/ExchangePanel';

const Exchanges: FC = () => {
  const { data, isLoading } = useGetExchangesQuery({});
  const exchangesList = data?.data?.exchanges;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Col span={6}>Exchanges</Col>

            <Col span={6}>24h Trade Volume</Col>

            <Col span={6}>Markets</Col>

            <Col span={6}>Change</Col>
          </Row>

          <Row>
            {exchangesList.map((exchange: any) => (
              <ExchangePanel key={exchange.id} exchange={exchange} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Exchanges;
