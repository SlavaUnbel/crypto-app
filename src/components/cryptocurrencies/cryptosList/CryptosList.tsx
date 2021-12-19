import { Card, Col, Row } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { millifyHoc } from '../../../app/utils';

interface Props {
  cryptos: any[];
}

const CryptosList: FC<Props> = ({ cryptos }) => {
  return (
    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos.map((currency: any) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={
                <img className="crypto-image" src={currency.iconUrl} alt="" />
              }
              hoverable
            >
              <p>Price: {millifyHoc(currency.price)}</p>
              <p>Market Cap: {millifyHoc(currency.marketCap)}</p>
              <p>Daily Change: {millifyHoc(currency.change)}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default CryptosList;
