import { Col } from 'antd';
import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { millifyHoc } from '../../app/utils';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoAPI';
import Loader from '../loader/Loader';
import CryptoDetailsDescription from './cryptoDetailsDescription/CryptoDetailsDescription';
import CryptoDetailsHeader from './cryptoDetailsHeader/CryptoDetailsHeader';
import CryptoDetailsStats from './cryptoDetailsStats/CryptoDetailsStats';
import CryptoDetailsTimePeriodSelector from './cryptoDetailsTimePeriodSelector/CryptoDetailsTimePeriodSelector';
import LineChart from './lineChart/LineChart';

const CryptoDetails: FC = () => {
  const [timePeriod, setTimePeriod] = useState("7d");

  const { coinId } = useParams();
  const { data, isLoading } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Col className="coin-detail-container">
          <CryptoDetailsHeader details={cryptoDetails} />

          <CryptoDetailsTimePeriodSelector setTimePeriod={setTimePeriod} />

          <LineChart
            coinHistory={coinHistory}
            currentPrice={millifyHoc(cryptoDetails.price)}
            coinName={cryptoDetails.name}
          />

          <CryptoDetailsStats details={cryptoDetails} isLoading={isLoading} />

          <CryptoDetailsDescription details={cryptoDetails} />
        </Col>
      )}
    </>
  );
};

export default CryptoDetails;
